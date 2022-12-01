const {
  GridFSBucket,
  MongoClient,
  ServerApiVersion,
  ObjectId
} = require('mongodb')

const fs = require('fs')
const formidable = require('formidable')

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

const db = client.db('file-transfer')
const bucket = new GridFSBucket(db, { bucketName: 'bucket' })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable()
    const id = new ObjectId()

    form.parse(req, (error, fields, { file }) => {
      const { sub: userId } = JSON.parse(fields.user)

      try {
        if (!file) {
          throw new Error('No file provided')
        }

        fs.createReadStream(file.filepath).pipe(
          bucket
            .openUploadStreamWithId(id, file.originalFilename, {
              metadata: {
                userId
              }
            })
            .on('finish', () => {
              res.status(200).json({
                success: true,
                message: 'File uploaded',
                name: file.originalFilename,
                id: id.toString()
              })
            })
        )
      } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
      }
    })
  }

  if (req.method === 'GET') {
    try {
      const cursor = await bucket
        .find({
          _id: ObjectId(req.query.id)
        })
        .toArray()

      const data = cursor[0]

      if (!data) {
        throw new Error('File not found')
      }

      if (req.query.type === 'data') {
        res.send(data)
      }

      if (req.query.type === 'download') {
        const stream = bucket.openDownloadStream(ObjectId(req.query.id))

        res.setHeader(
          'Content-Disposition',
          `attachment; filename=${data.filename}`
        )

        res.status(200).send(stream)
      }
    } catch (error) {
      console.error(error)

      res.status(400).json(error.message)
    }
  }
}

export const config = {
  api: {
    responseLimit: false,
    bodyParser: false
  }
}
