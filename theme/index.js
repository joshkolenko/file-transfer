import { extendTheme } from '@chakra-ui/react'

import { Button } from './Button'

const colors = {
  gray: {
    50: '#faf9fa',
    100: '#eeedf1',
    200: '#e2e0e7',
    300: '#d5d1db',
    400: '#c6c2cf',
  },
  violet: {
    50: '#faf8ff',
    100: '#f1ebff',
    400: '#ceb9ff',
    900: '#4210b8',
  },
}

const fonts = {
  body: 'Inter, Arial, Helvetica, sans-serif',
}

const fontSizes = {
  base: '1rem',
  md: '1.2rem',
  lg: '2rem',
}

const letterSpacings = {
  body: '-0.02em',
}

const radii = {
  button: '0.25em',
}

const sizes = {
  container: '1440px',
  hero: '1140px',
}

const space = {
  box: '1rem',
  nav: '2rem',
}

const styles = {
  global: {
    html: {
      fontSize: '15px',
    },
    body: {
      bg: 'gray.100',
      bgImage: `
        radial-gradient(circle 80rem at 110% -70%, rgba(0, 240, 255, 0.3), transparent),
        radial-gradient(circle 40rem at -20% 50%, rgba(160, 0, 255, 0.3), transparent),
        radial-gradient(circle 110rem at 120% 150%, rgba(255, 230, 0, 0.5), transparent)
      `,
      color: 'black',
      minHeight: '100vh',
      fontWeight: 'medium',
      letterSpacing: 'body',
      pb: '4rem',
    },
    'p, a, h1, h2, h3, h4': {
      letterSpacing: 'body',
    },
  },
}

const components = {
  Button,
}

export const theme = extendTheme({
  colors,
  components,
  fonts,
  fontSizes,
  letterSpacings,
  radii,
  sizes,
  space,
  styles,
})
