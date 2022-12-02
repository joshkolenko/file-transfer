import { Container, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import App from '../components/App'
import Upload from '../components/Upload'

export default function Home() {
  return (
    <App title="File Transfer" requireAuth={true}>
      <Container
        maxW="container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
            mb: '1rem',
          }}
        >
          Upload a file
        </Heading>
        <Text fontSize="md" mb="4rem">
          To begin, choose a file you&apos;d like to upload.
        </Text>
        <Upload />
      </Container>
    </App>
  )
}
