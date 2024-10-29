import { Navigate, Outlet } from "react-router-dom"
import { checkUserIsAdmin, checkUserIsLogged } from "../../utils/utils"

export const AdminRoute = () => {
  const isAuthenticated = checkUserIsLogged()
  const isAdmin = checkUserIsAdmin()
  if (isAuthenticated && isAdmin) {
    return <Outlet />
  }

  return <Navigate to="/" replace />
}
