import styles from "./ProductCard.module.css"

export const ProductCard = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
      />
      <div className={styles.name}>Product Name</div>
      <div className={styles.price}>23,45 €</div>
    </div>
  )
}
