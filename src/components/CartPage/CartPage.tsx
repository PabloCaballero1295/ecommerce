import styles from "./CartPage.module.css"

import { deleteAllProducts } from "../../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { priceDisplay } from "../../utils/utils"

export const CartPage = () => {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const getTotalPrice = () => {
    let totalPrice = 0

    cart.products.map((cartProduct) => {
      totalPrice += cartProduct.product.price * cartProduct.count
    })

    return totalPrice
  }

  return (
    <div className="container">
      <div className={styles.title}>Carrito</div>
      {cart.products.length > 0 ? (
        <>
          <table className={styles.cart_table}>
            <tr>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Cantidad</th>
              <th>Precio Unidad</th>
              <th>Precio Total</th>
            </tr>
            {cart.products.map((cartProduct) => (
              <tr key={cartProduct.product.id}>
                <td>{cartProduct.product.name}</td>
                <td>
                  <img
                    className={styles.image}
                    src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
                  />
                </td>
                <td>{cartProduct.count}</td>
                <td>{priceDisplay(cartProduct.product.price)} €</td>
                <td>
                  {priceDisplay(cartProduct.count * cartProduct.product.price)}{" "}
                  €
                </td>
              </tr>
            ))}
          </table>
          <div>TOTAL: {priceDisplay(getTotalPrice())} €</div>
        </>
      ) : (
        <div>No hay productos en el carrito</div>
      )}
      <button
        className={styles.empty_cart_button}
        onClick={() => dispatch(deleteAllProducts())}
      >
        Vaciar carrito
      </button>
    </div>
  )
}
