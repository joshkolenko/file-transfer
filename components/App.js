import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Nav from './Nav'
import { Box, Center, Spinner } from '@chakra-ui/react'

export default function App({
  title = 'File Transfer',
  children,
  loading,
  requireAuth,
}) {
  const { isAuthenticated, isLoading } = useAuth0()
  const router = useRouter()

  const rendered = () => {
    if (loading) {
      return (
        <Center h="20rem">
          <Spinner />
        </Center>
      )
    }

    if (requireAuth) {
      if (isLoading) {
        return (
          <Center h="20rem">
            <Spinner />
          </Center>
        )
      }

      if (!isAuthenticated) {
        if (router.pathname === '/') {
          return (
            <div>
              <p>Sign in to upload files.</p>
            </div>
          )
        }

        router.push('/')

        return
      }
    }

    return children
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" minH="100vh">
        <Nav />
        {rendered()}
      </Box>
    </>
  )
}
