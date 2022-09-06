import { Outlet } from 'react-router-dom'

import Logout from 'components/Logout'

const Layout = () => {
  return (
    <>
      <header>
        <Logout />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
