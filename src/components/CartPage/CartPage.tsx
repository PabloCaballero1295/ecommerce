import styles from "./CartPage.module.css"

import { deleteAllProducts } from "../../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { priceDisplay } from "../../utils/utils"

import {
  addProduct,
  decreaseProduct,
  removeProduct,
} from "../../redux/cartSlice"
import { ProductItem } from "../../types/cartProduct"

export const CartPage = () => {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const getTotalPrice = () => {
    let totalPrice = 0

    cart.products.map((cartProduct) => {
      totalPrice += cartProduct.price * cartProduct.count
    })

    return totalPrice
  }

  const addToCart = (product: ProductItem) => {
    dispatch(addProduct(product))
  }

  const decreaseCart = (product: ProductItem) => {
    dispatch(decreaseProduct(product))
  }

  const removeProductFromCart = (product: ProductItem) => {
    dispatch(removeProduct(product.id))
  }

  return (
    <div className="container">
      <div className={styles.title}>Carrito</div>
      {cart.products.length > 0 ? (
        <>
          <table className={styles.cart_table}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Cantidad</th>
                <th>Precio Unidad</th>
                <th>Precio Total</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((cartProduct) => (
                <tr key={cartProduct.id}>
                  <td>{cartProduct.name}</td>
                  <td>
                    <img
                      className={styles.image}
                      src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
                    />
                  </td>
                  <td>
                    <div className={styles.cart_buttons_wrapper}>
                      <button
                        className={styles.cart_button}
                        onClick={() => decreaseCart(cartProduct)}
                      >
                        -
                      </button>
                      <div className={styles.product_count}>
                        {cartProduct.count}
                      </div>
                      <button
                        className={styles.cart_button}
                        onClick={() => addToCart(cartProduct)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{priceDisplay(cartProduct.price)} €</td>
                  <td>
                    {priceDisplay(cartProduct.count * cartProduct.price)} €
                  </td>
                  <td>
                    <button
                      className={styles.remove_product_button}
                      onClick={() => {
                        removeProductFromCart(cartProduct)
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.cart_price}>
            TOTAL: {priceDisplay(getTotalPrice())} €
          </div>
        </>
      ) : (
        <div className={styles.empty_cart_message}>
          No hay productos en el carrito
        </div>
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
