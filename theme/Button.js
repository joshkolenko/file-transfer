import { defineStyle } from '@chakra-ui/react'

export const Button = defineStyle({
  baseStyle: {
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  sizes: {
    md: {
      fontSize: 'base',
      height: '3rem',
      px: '3.5rem'
    },
    lg: {
      fontSize: 'md',
      height: '4.25rem',
      px: '3.5rem'
    }
  },
  variants: {
    white: {
      color: 'black',
      background: 'white'
    },
    secondary: {
      border: '1px solid black',
      color: 'black'
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'white'
  }
})
