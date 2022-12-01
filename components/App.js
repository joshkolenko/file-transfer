import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Nav from './Nav'

export default function App({
  title = 'File Transfer',
  children,
  requireAuth
}) {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const router = useRouter()

  console.log(user, isAuthenticated)

  const rendered = () => {
    if (requireAuth) {
      if (isLoading) {
        return (
          <div>
            <p>Loading...</p>
          </div>
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

      <main>
        <Nav />
        {rendered()}
      </main>
    </>
  )
}
