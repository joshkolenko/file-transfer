import { useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Link from 'next/link'

export default function Upload() {
  const { user } = useAuth0()
  const [file, setFile] = useState(null)
  const [fileInfo, setFileInfo] = useState(null)
  const inputRef = useRef()

  const handleSubmit = async e => {
    e.preventDefault()

    const body = new FormData()
    body.append('file', file)
    body.append('user', JSON.stringify(user))

    const response = await fetch('api/file', {
      method: 'POST',
      body
    }).then(res => res.json())

    if (response.success) {
      setFileInfo({
        ...response,
        url: window.location.origin + '/file/' + response.id
      })
    }
  }

  const handleRemove = () => {
    setFile(null)
    inputRef.current.value = ''
  }

  const getFileSize = bytes => {
    var i = bytes == 0 ? 0 : Math.floor(Math.log(bytes) / Math.log(1024))
    return (
      (bytes / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
  }

  return (
    <div>
      <h1>Upload a file</h1>
      <div>
        {file ? (
          <>
            <p>
              {file.name} ({getFileSize(file.size)})
            </p>
            <button onClick={handleRemove}>&times;</button>
          </>
        ) : (
          <p>No file chosen</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose file
          <input
            ref={inputRef}
            type="file"
            onInput={e => {
              setFile(e.target.files[0])
            }}
          />
        </label>
        <button disabled={file ? false : true}>Submit</button>
      </form>
      {fileInfo ? (
        <p>
          File available at:
          <Link href={fileInfo.url}>{fileInfo.url}</Link>
        </p>
      ) : null}
    </div>
  )
}
