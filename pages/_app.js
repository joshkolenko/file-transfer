import { useEffect, useState } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import '../styles/global.scss'
import { theme } from '../theme'

function FileTransfer({ Component, pageProps }) {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  if (!origin) {
    return <div></div>
  }

  return (
    <Auth0Provider
      domain="dev-58laixp0.us.auth0.com"
      clientId="UTCZsxg8ppzsY5v3S8VLGS54njpecDX1"
      redirectUri={origin}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Auth0Provider>
  )
}

export default FileTransfer
