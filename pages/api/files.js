const { GridFSBucket, MongoClient, ServerApiVersion } = require('mongodb')

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

const db = client.db('file-transfer')
const bucket = new GridFSBucket(db, { bucketName: 'bucket' })

export default async function handler(req, res) {
  const { userId } = req.query

  const cursor = bucket.find({
    metadata: {
      userId
    }
  })

  const files = await cursor.toArray()

  res.status(200).json(files)
}
