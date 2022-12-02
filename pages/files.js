import { useAuth0 } from '@auth0/auth0-react'
import {
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import App from '../components/App'
import File from '../components/File'

export default function Files() {
  const { user } = useAuth0()
  const [files, setFiles] = useState(null)

  useEffect(() => {
    const getFiles = async () => {
      const data = await fetch(`/api/files?userId=${user?.sub}`).then(res =>
        res.json()
      )

      setFiles(data)
    }

    getFiles()
  }, [user])

  const renderedFiles = () => {
    if (files === null) {
      return <Text>An error occurred</Text>
    }

    if (!files.length) {
      return (
        <>
          <Text>No files found</Text>
          <Link
            as={NextLink}
            href="/upload"
            fontWeight="semibold"
            mt="0.5rem"
            textDecor="underline"
          >
            Upload your first file
          </Link>
        </>
      )
    }

    const gridItems = files
      .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
      .map(file => {
        return (
          <GridItem
            as={File}
            key={file._id}
            name={file.name}
            size={file.size}
            href={window.location.origin + '/file/' + file._id}
          />
        )
      })

    return (
      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        {gridItems}
      </Grid>
    )
  }

  return (
    <App title="My Files" loading={files === null} requireAuth={true}>
      <Container
        maxW="container"
        sx={{
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
        }}
      >
        <Heading
          as="h1"
          sx={{
            fontSize: '3.75rem',
            fontWeight: 700,
            maxWidth: '10em',
            mt: '0.5rem',
            mb: '4rem',
          }}
        >
          My files
        </Heading>
        {renderedFiles()}
      </Container>
    </App>
  )
}
