import { Box, Center, Spinner, Text } from '@chakra-ui/react'

export default function File({ name, href, size }) {
  const getFileSize = bytes => {
    bytes = parseInt(bytes)

    const i = bytes == 0 ? 0 : Math.floor(Math.log(bytes) / Math.log(1024))

    return (
      (bytes / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
  }

  const renderedFile = () => {
    if (!size || !name) {
      return (
        <Center
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Spinner />
        </Center>
      )
    }

    return (
      <>
        <svg viewBox="0 0 50 46" fill="none">
          <path
            d="M3.67094 23.6174L25.2228 2.06552C26.0015 1.28683 27.264 1.28683 28.0427 2.06552C28.8214 2.84421 28.8214 4.1067 28.0427 4.88539L6.22114 26.7069C6.19636 26.7421 6.16938 26.7762 6.14021 26.809C3.15794 30.1641 3.27489 35.3065 6.49081 38.5224C9.70674 41.7383 14.8491 41.8553 18.2042 38.873C18.237 38.8438 18.2711 38.8168 18.3063 38.7921L44.3576 12.7407C46.36 10.7384 46.36 7.49198 44.3576 5.48965C42.3553 3.48731 39.1089 3.48731 37.1065 5.48965L12.6648 29.9314C12.6522 29.9491 12.6392 29.9665 12.6255 29.9837C12.1811 30.5419 12.218 31.3587 12.7348 31.8756C13.2516 32.3924 14.0685 32.4293 14.6267 31.9849C14.6438 31.9712 14.6613 31.9581 14.679 31.9456L35.6966 10.928C36.4753 10.1493 37.7378 10.1493 38.5165 10.928C39.2952 11.7067 39.2952 12.9691 38.5165 13.7478L17.5689 34.6954C15.4553 36.809 12.0285 36.809 9.91494 34.6954C7.80137 32.5819 7.80137 29.1551 9.91494 27.0415L34.2867 2.66978C37.8464 -0.889926 43.6178 -0.889926 47.1775 2.66978C50.8534 6.34566 50.9555 11.7194 47.3859 15.3521C44.2759 18.5171 21.5095 41.2288 21.3952 41.3429L21.3932 41.3449C16.4983 46.2369 8.56464 46.236 3.67094 41.3423C-1.22365 36.4477 -1.22365 28.512 3.67094 23.6174Z"
            fill="black"
          />
        </svg>
        <Text
          sx={{
            width: '10rem',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflowX: 'hidden',
            fontWeight: 600,
            lineHeight: '1.5',
            mb: '0.5rem',
          }}
        >
          {name}
        </Text>
        <Text fontSize="lg" fontWeight="700">
          {getFileSize(size)}
        </Text>
      </>
    )
  }

  const hrefStyles = href
    ? {
        cursor: 'pointer',

        '&:hover': {
          background: 'rgba(255, 255, 255, 75%)',
          borderColor: 'rgba(255, 255, 255, 75%)',
        },
      }
    : {}

  return (
    <Box
      as={href ? 'a' : 'div'}
      href={href || null}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDir: 'column',
        width: 200,
        height: 200,
        border: '1px solid',
        borderColor: 'gray.100',
        borderRadius: '0.75rem',
        background: 'rgba(255, 255, 255, 50%)',
        padding: '3.5rem 1rem 1.5rem',
        textAlign: 'center',
        lineHeight: '1',
        transitionProperty: 'background, borderColor',
        transitionDuration: '300ms',
        ...hrefStyles,
        svg: {
          width: '3.5rem',
          marginBottom: 'auto',
        },
      }}
    >
      {renderedFile()}
    </Box>
  )
}
