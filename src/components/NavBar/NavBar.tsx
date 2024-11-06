import { NavBarButton } from "../NavBarButton/NavBarButton"
import styles from "./NavBar.module.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import { Link } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import { ProfileMenu } from "../ProfileMenu/ProfileMenu"
import { useAppSelector } from "../../redux/hooks"

export const NavBar = () => {
  const cart = useAppSelector((state) => state.cart)

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
          {localStorage.getItem("admin") == "true" ? (
            <NavBarButton text="Crear producto" to="/create-product" />
          ) : null}
          <ProfileMenu />
          <div className={styles.cart_nav_wrapper}>
            <NavBarButton text="Carrito" to="/cart" />
            {cart.products.length > 0 ? (
              <div className={styles.cart_number}>{cart.products.length}</div>
            ) : null}
          </div>
        </div>

        <div className={styles.navbar_right_content_mobile}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
