import { Outlet } from "react-router-dom"
import Dashboard from "./Dashboard"

const Layout = () => {
  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  )
}

export default Layout
