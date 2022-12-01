import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import App from '../../components/App'
import Download from '../../components/Download'

export default function File() {
  const router = useRouter()
  const { id } = router.query

  const [fileInfo, setFileInfo] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!id) return

    const getFileInfo = async () => {
      const response = await fetch(`/api/file?type=data&id=${id}`).then(res =>
        res.json()
      )

      if (response.error) {
        setHasError(true)
      }

      setFileInfo(response)
    }

    getFileInfo()
  }, [id])

  if (hasError) {
    return (
      <App title="File not found">
        <div>File not found</div>
      </App>
    )
  }

  return (
    <App title={fileInfo ? fileInfo.filename + ' | ' : 'Download'}>
      <Download id={id} fileInfo={fileInfo} />
    </App>
  )
}
