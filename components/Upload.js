import { useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Link from 'next/link'
import { Box, Button, grid, Spinner } from '@chakra-ui/react'
import File from './File'
import { useRouter } from 'next/router'

export default function Upload() {
  const { user } = useAuth0()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)

  const inputRef = useRef()

  const handleSubmit = async e => {
    e.preventDefault()

    setIsLoading(true)

    const body = new FormData()
    body.append('file', file)
    body.append('user', JSON.stringify(user))

    const response = await fetch('api/file', {
      method: 'POST',
      body,
    }).then(res => res.json())

    if (response.success) {
      router.push('/file/' + response.id)
    } else {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  if (!file) {
    return (
      <Button as="label" size="lg">
        Choose file
        <input
          type="file"
          ref={inputRef}
          onChange={e => setFile(e.target.files[0])}
          style={{ display: 'none' }}
        />
      </Button>
    )
  }

  return (
    <>
      <File name={file.name} size={file.size} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 15rem)',
          gap: '0.75rem',
          mt: '2.5rem',
          '.chakra-button': {
            padding: 0,
          },
        }}
      >
        <Button as="label" size="lg" variant="secondary">
          Choose new file
          <input
            type="file"
            ref={inputRef}
            onChange={e => setFile(e.target.files[0])}
            style={{ display: 'none' }}
          />
        </Button>
        <Button size="lg" onClick={handleSubmit}>
          Upload file
        </Button>
      </Box>
    </>
  )
}
