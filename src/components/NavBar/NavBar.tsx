import { NavBarButton } from "../NavBarButton/NavBarButton"
import styles from "./NavBar.module.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import { Link } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import { ProfileMenu } from "../ProfileMenu/ProfileMenu"

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <div className={styles.navbar_left_content}>
          <Link to="/" className={styles.web_logo}>
            <div className={styles.web_name}>Ecommerce</div>
          </Link>
        </div>
        <div className={styles.search_wrapper}>
          <SearchIcon sx={{ color: "black" }} className={styles.search_icon} />
          <input
            className={styles.search_input}
            placeholder="Buscar..."
          ></input>
        </div>

        <div className={styles.navbar_right_content}>
          {/*<NavBarButton text="Perfil" to="/profile" />*/}
          <ProfileMenu />
          <NavBarButton text="Carrito" to="/cart" />
        </div>

        <div className={styles.navbar_right_content_mobile}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
