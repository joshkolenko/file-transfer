import { defineStyle } from '@chakra-ui/react'

export const Button = defineStyle({
  baseStyle: {
    fontWeight: 'bold'
  },
  sizes: {
    md: {
      fontSize: 'md',
      height: '3rem',
      px: '3.5rem'
    },
    lg: {
      fontSize: '1.2rem',
      height: '4.25rem',
      px: '3.5rem'
    }
  },
  variants: {
    white: {
      color: 'black',
      background: 'white'
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'white'
  }
})
