import { useAuth0 } from '@auth0/auth0-react'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import App from '../components/App'

export default function Home() {
  const { isAuthenticated, loginWithPopup } = useAuth0()

  return (
    <App title="File Transfer">
      <Container maxW="container" pl="10rem" pt="3rem">
        <Box>
          <Text
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'black',
              svg: {
                fill: 'black',
                width: '2rem',
                marginRight: '1rem',
              },
            }}
          >
            <svg viewBox="0 0 38 14">
              <path fillRule="evenodd" clipRule="evenodd" d="M25 8H0V6H25V8Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 12C33.7614 12 36 9.76142 36 7C36 4.23858 33.7614 2 31 2C28.2386 2 26 4.23858 26 7C26 9.76142 28.2386 12 31 12ZM31 14C34.866 14 38 10.866 38 7C38 3.13401 34.866 0 31 0C27.134 0 24 3.13401 24 7C24 10.866 27.134 14 31 14Z"
              />
            </svg>
            Quick & painless file sharing
          </Text>
        </Box>
        <Heading
          as="h1"
          sx={{
            fontSize: '4.25rem',
            fontWeight: 500,
            maxWidth: '10em',
            mt: '2.5rem',
          }}
        >
          <Text as="span" borderBottom="0.075em solid black">
            Upload a file
          </Text>{' '}
          and send it{' '}
          <Text as="span" fontStyle="italic">
            anywhere
          </Text>{' '}
          in a matter of <strong>seconds</strong>.
        </Heading>
        {isAuthenticated ? (
          <Button as={NextLink} href="/upload" size="lg" mt="4rem">
            Upload a file
          </Button>
        ) : (
          <Button onClick={loginWithPopup} size="lg" mt="4rem">
            Sign in to upload files
          </Button>
        )}
      </Container>
    </App>
  )
}
