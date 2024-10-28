import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { useRef, useState, MouseEvent } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { signOut } from "@firebase/auth"
import { auth } from "../../firebaseConfig"
import styles from "./ProfileMenu.module.css"

export const ProfileMenu = () => {
  const menuButtonRef = useRef<HTMLDivElement>(null)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  let userId = localStorage.getItem("userId") as string

  const navigate = useNavigate()
  const location = useLocation()

  const handleProfileButton = () => {
    handleClose()
    navigate("/profile")
  }

  const handleLogoutButton = () => {
    handleClose()
    localStorage.setItem("userId", "")
    localStorage.setItem("admin", "false")
    userId = ""

    signOut(auth)
      .then(() => {
        console.log("Succesfull logut")

        if (location.pathname == "/") {
          window.location.reload()
        } else {
          navigate("/")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogin = () => {
    handleClose()
    navigate("/login")
  }
  const handleSignUp = () => {
    handleClose()
    navigate("/signup")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div
        ref={menuButtonRef}
        className={styles.menu_button}
        onClick={handleClick}
      >
        Perfil
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {userId ? null : (
          <MenuItem onClick={handleLogin}>Iniciar sesión</MenuItem>
        )}
        {userId ? null : (
          <MenuItem onClick={handleSignUp}>Registrarse</MenuItem>
        )}
        {userId ? (
          <MenuItem onClick={handleProfileButton}>Ver Perfil</MenuItem>
        ) : null}
        {userId ? (
          <MenuItem onClick={handleLogoutButton}>Cerrar sesión</MenuItem>
        ) : null}
      </Menu>
    </div>
  )
}
