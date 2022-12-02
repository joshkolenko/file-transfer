import NextLink from 'next/link'
import File from '../components/File'
import { Button, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Download({ name, size, onLoad }) {
  const router = useRouter()

  const [hasError, setHasError] = useState(false)
  const [file, setFile] = useState(null)

  useEffect(() => {
    const getFileInfo = async () => {
      const response = await fetch(
        `/api/file?type=data&id=${router.query.id}`
      ).then(res => res.json())

      if (response.error) {
        setHasError(true)
      }

      setFile(response)
    }

    getFileInfo()
  }, [router])

  useEffect(() => {
    if (file && file.name) {
      onLoad(file.name + ' | Download')
    }
  }, [file, onLoad])

  if (hasError) {
    onLoad('File not found')

    return <div>File not found</div>
  }

  if (!file) {
    return <Spinner />
  }

  return (
    <>
      <File name={file.name} size={file.size} />
      <Button
        as={NextLink}
        href={'/api/file?type=download&id=' + router.query.id}
        size="lg"
        download
        sx={{
          mt: '2.5rem',
          width: '200px',
        }}
      >
        Download
      </Button>
    </>
  )
}
