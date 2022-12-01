import { useAuth0 } from '@auth0/auth0-react'
import { Container, Button, Link, Box, Flex } from '@chakra-ui/react'

import NextLink from 'next/link'

export default function Nav() {
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0()

  return (
    <Box as="nav">
      <Container
        maxW="container"
        p="nav"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Link
          as={NextLink}
          href="/"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginRight: 'auto'
          }}
        >
          file-transfer
        </Link>
        {isAuthenticated ? (
          <>
            <Flex
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                a: {
                  fontWeight: 'bold',
                  margin: '1rem'
                }
              }}
            >
              <Link as={NextLink} href="/files">
                Upload a file
              </Link>
              <Link as={NextLink} href="/files">
                My Files
              </Link>
              <Link as={NextLink} href="/account">
                Account
              </Link>
            </Flex>
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Button onClick={loginWithPopup}>Sign in</Button>
        )}
      </Container>
    </Box>
  )
}
