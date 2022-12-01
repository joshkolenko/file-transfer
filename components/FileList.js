import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Link from 'next/link'

export default function FileList() {
  const { user } = useAuth0()

  const [files, setFiles] = useState(null)

  useEffect(() => {
    const getFiles = async () => {
      const data = await fetch(`/api/files/?userId=${user.sub}`).then(res =>
        res.json()
      )

      setFiles(data)
    }

    getFiles()
  }, [user])

  if (!files) {
    return <div>Loading...</div>
  }

  if (!files.length) {
    return <div>No files found</div>
  }

  const renderedFiles = files.map(file => {
    return (
      <li key={file._id}>
        <Link href={window.location.origin + '/file/' + file._id}>
          {file.filename}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h2>Files</h2>
      <ul>{renderedFiles}</ul>
    </div>
  )
}
