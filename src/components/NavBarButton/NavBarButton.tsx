import styles from "./NavBarButton.module.css"
import { Link, useLocation } from "react-router-dom"

interface NavBarButtonProps {
  text: string
  to: string
}

export const NavBarButton = ({ text, to }: NavBarButtonProps) => {
  const location = useLocation()

  const isActiveRoute = (route: string) => {
    if (location.pathname == route) {
      return true
    }
  }

  return (
    <Link
      to={to}
      className={`${styles.navbar_button} ${
        isActiveRoute(to) ? styles.active : ""
      }`}
    >
      {text}
    </Link>
  )
}
