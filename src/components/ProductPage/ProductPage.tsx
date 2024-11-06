import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import config from "../../config/config"
import axios from "axios"
import { Product } from "../../types/product"
import styles from "./ProductPage.module.css"
import { priceDisplay } from "../../utils/utils"
import { Loading } from "../Loading/Loading"

import { addProduct, decreaseProduct } from "../../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectProductQuantity } from "../../redux/cartSelectors"

export const ProductPage = () => {
  const { id = "" } = useParams()

  const cart = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const cartProductCount = useAppSelector((state) =>
    selectProductQuantity(state, id)
  )
  const isProductOnCart = () => {
    const index = cart.products.findIndex(
      (cartProducts) => cartProducts.id == id
    )

    if (index != -1) {
      return true
    }

    return false
  }

  const [productData, setProductData] = useState<Product>({
    id: "",
    name: "",
    price: 0,
    description: "",
  })

  useEffect(() => {
    if (id) {
      setLoading(true)
      fetchData(id)
      setLoading(false)
    }
  }, [id])

  const fetchData = async (product_id: string) => {
    try {
      const response = await axios.get(
        config.backendBaseURL + "/product/" + product_id
      )

      setProductData(response.data as Product)
    } catch (err) {
      console.log(err)
    }
  }

  const addToCart = () => {
    dispatch(addProduct(productData))
  }

  const decreaseCart = () => {
    dispatch(decreaseProduct(productData))
  }

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.product_row}>
            <div className={styles.left_column}>
              <img
                className={styles.image}
                src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
              />
            </div>
            <div className={styles.right_column}>
              <div className={styles.product_name}>{productData.name}</div>
              <div className={styles.product_price}>
                {priceDisplay(productData.price)} €
              </div>
              {isProductOnCart() ? (
                <div className={styles.cart_buttons_wrapper}>
                  <button className={styles.cart_button} onClick={decreaseCart}>
                    -
                  </button>
                  <div className={styles.cart_count}>{cartProductCount}</div>
                  <button className={styles.cart_button} onClick={addToCart}>
                    +
                  </button>
                </div>
              ) : (
                <button className={styles.add_to_cart} onClick={addToCart}>
                  Agregar al carrito
                </button>
              )}
            </div>
          </div>
          <div className={styles.description_title}>Descrición</div>
          <div className={styles.description}>{productData.description}</div>
        </>
      )}
    </div>
  )
}
