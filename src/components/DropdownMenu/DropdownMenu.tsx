import { useState, useRef, MouseEvent } from "react"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
//import styles from "./DropdownMenu.module.css"
import { useNavigate } from "react-router-dom"

export const DropdownMenu = () => {
  const menuButtonRef = useRef<HTMLDivElement>(null)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const navigate = useNavigate()

  const handleProfileButton = () => {
    handleClose()
    navigate("/profile")
  }

  const handleCartButton = () => {
    handleClose()
    navigate("/cart")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <i
        ref={menuButtonRef}
        className="fa-solid fa-bars"
        onClick={handleClick}
      ></i>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleProfileButton}>Profile</MenuItem>
        <MenuItem onClick={handleCartButton}>Carrito</MenuItem>
      </Menu>
    </div>
  )
}
