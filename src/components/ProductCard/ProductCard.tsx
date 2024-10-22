import { useNavigate } from "react-router-dom"
import { Product } from "../../types/product"
import styles from "./ProductCard.module.css"
import { priceDisplay } from "../../utils/utils"

export const ProductCard = ({ name, price, id }: Product) => {
  const navigate = useNavigate()

  const goToProduct = () => {
    navigate("/product/" + id)
  }

  return (
    <div className={styles.wrapper} onClick={goToProduct}>
      <img
        className={styles.image}
        src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{priceDisplay(price)} €</div>
    </div>
  )
}
