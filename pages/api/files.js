const { GridFSBucket, MongoClient, ServerApiVersion } = require('mongodb')

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

const db = client.db('file-transfer')
const bucket = new GridFSBucket(db, { bucketName: 'uploads' })

export default async function handler(req, res) {
  const { userId } = req.query

  const cursor = bucket.find({
    metadata: {
      userId,
    },
  })

  const array = await cursor.toArray()
  const files = array.map(file => {
    return { ...file, name: file.filename, size: file.length }
  })

  res.status(200).json(files)
}
