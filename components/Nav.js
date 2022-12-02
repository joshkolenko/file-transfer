import { useAuth0 } from '@auth0/auth0-react'
import { Container, Button, Link, Box, Flex } from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()

  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  return (
    <Box as="nav">
      <Container
        maxW="container"
        p="nav"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          as={NextLink}
          href="/"
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginRight: 'auto',
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
                  position: 'relative',
                  fontWeight: 'bold',
                  margin: '0 1rem',
                  padding: '0.75rem 0',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    display: 'block',
                    height: '2px',
                    width: '0',
                    background: 'black',
                    transition: 'width 300ms ease',
                  },
                  '&:hover': {
                    textDecor: 'none',
                    '&::after': {
                      width: '1.5rem',
                    },
                  },
                  '&.active': {
                    '&::after': {
                      width: '2.5rem',
                    },
                  },
                },
              }}
            >
              <Link
                as={NextLink}
                className={pathname === '/upload' ? 'active' : ''}
                href="/upload"
              >
                Upload a file
              </Link>
              <Link
                as={NextLink}
                className={pathname === '/files' ? 'active' : ''}
                href="/files"
              >
                My Files
              </Link>
              {/* <Link
                as={NextLink}
                className={pathname === '/account' ? 'active' : ''}
                href="/account"
              >
                Account
              </Link> */}
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
