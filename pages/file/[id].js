import { Container, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

import App from '../../components/App'
import Download from '../../components/Download'

export default function FilePage() {
  const [title, setTitle] = useState('Loading...')

  const changeTitle = newTitle => setTitle(newTitle)

  return (
    <App title={title}>
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
          Download file
        </Heading>
        <Text fontSize="md" mb="4rem">
          Click the button below to begin your download.
        </Text>
        <Download onLoad={changeTitle} />
        <Text
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 'sm',
            mt: '2rem',
            p: '1rem 1.5rem ',
            border: '1px solid',
            borderColor: 'gray.100',
            borderRadius: 'lg',
            background: 'rgba(255, 255, 255, 50%)',
            color: 'gray.500',
            boxShadow: '0 0 0 transparent',
            transitionProperty: 'color, box-shadow,  border-color',
            transitionDuration: '150ms',
            cursor: 'pointer',
            svg: {
              width: '1rem',
              ml: '1rem',
              transition: 'fill 150ms',
              fill: 'gray.500',
            },

            '&:hover': {
              color: 'black',
              borderColor: '#00F0FF',
              boxShadow: '0 0 0 3px rgba(0, 240, 255, 20%)',
              svg: {
                fill: '#00F0FF',
              },
            },
          }}
        >
          {window.location.href}
          <svg viewBox="0 0 40 45">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35 12H13C12.4477 12 12 12.4477 12 13V40C12 40.5523 12.4477 41 13 41H35C35.5523 41 36 40.5523 36 40V13C36 12.4477 35.5523 12 35 12ZM13 8C10.2386 8 8 10.2386 8 13V40C8 42.7614 10.2386 45 13 45H35C37.7614 45 40 42.7614 40 40V13C40 10.2386 37.7614 8 35 8H13Z"
            />
            <path d="M27 4H5C4.44771 4 4 4.44772 4 5V32C4 32.5523 4.44772 33 5 33V37C2.23858 37 0 34.7614 0 32V5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5H28C28 4.44772 27.5523 4 27 4Z" />
          </svg>
        </Text>
      </Container>
    </App>
  )
}
