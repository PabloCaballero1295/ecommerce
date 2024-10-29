import { Navigate, Outlet } from "react-router-dom"
import { checkUserIsLogged } from "../../utils/utils"

export const UnAuthenticatedRoute = () => {
  const isAuthenticated = checkUserIsLogged()
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
