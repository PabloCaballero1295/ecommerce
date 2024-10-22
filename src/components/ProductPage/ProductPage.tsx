import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import config from "../../config/config"
import axios from "axios"
import { Product } from "../../types/product"
import styles from "./ProductPage.module.css"
import { priceDisplay } from "../../utils/utils"

export const ProductPage = () => {
  const { id } = useParams()

  const [productData, setProductData] = useState<Product>({
    id: "",
    name: "",
    price: 0,
  })

  useEffect(() => {
    if (id) {
      fetchData(id)
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

  return (
    <div className="container">
      <div className={styles.title}>PRODUCT</div>
      <img
        className={styles.image}
        src="https://www.uvy.edu.mx/wp-content/uploads/2020/04/MARIO.png"
      />
      <div>{productData.name}</div>
      <div>{priceDisplay(productData.price)} €</div>
    </div>
  )
}
