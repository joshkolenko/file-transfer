import { useAuth0 } from '@auth0/auth0-react'

import App from '../components/App'
import FileList from '../components/FileList'

export default function Files() {
  const { user } = useAuth0()

  return (
    <App title="My Files" requireAuth={true}>
      <p>{user?.name}</p>
      <FileList />
    </App>
  )
}
