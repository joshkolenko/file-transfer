import Link from 'next/link'

export default function Download({ id, fileInfo }) {
  if (!fileInfo) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <p>{fileInfo.filename}</p>
      <Link href={`/api/file?type=download&id=${id}`} download>
        Download
      </Link>
    </div>
  )
}
