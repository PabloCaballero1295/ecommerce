import { useEffect, useState } from "react"
import axios from "axios"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./MainPage.module.css"
import { Product } from "../../types/product"
import config from "../../config/config"
import { Loading } from "../Loading/Loading"

export const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get(config.backendBaseURL + "/products")

        setProducts(response.data as Product[])
        setLoading(false)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.title}>Productos</div>
          <div className={styles.products_grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
