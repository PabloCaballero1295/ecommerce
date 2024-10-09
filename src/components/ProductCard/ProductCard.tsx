import { Product } from "../../types/product"
import styles from "./ProductCard.module.css"

export const ProductCard = ({ name, price }: Product) => {
  const PriceDisplay = () => {
    return (Math.round(price * 100) / 100).toFixed(2)
  }

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{PriceDisplay()} €</div>
    </div>
  )
}
