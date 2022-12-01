import { useAuth0 } from '@auth0/auth0-react'

import App from '../components/App'

export default function Account() {
  const { user } = useAuth0()

  return (
    <App title="Account" requireAuth={true}>
      <p>{user?.name}</p>
    </App>
  )
}
