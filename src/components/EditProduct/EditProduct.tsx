import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import config from "../../config/config"
import styles from "./EditProduct.module.css"
import { Product } from "../../types/product"
import { Loading } from "../Loading/Loading"

export const EditProduct = () => {
  const { id = "" } = useParams()
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

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

      const productData = response.data as Product

      setName(productData.name)
      setPrice(productData.price)
      setDescription(productData.description ? productData.description : "")
    } catch (err) {
      console.log(err)
    }
  }

  const SaveProductOnDB = async () => {
    if (name.length == 0 || price == 0) {
      console.log("ERROR")
      return
    }

    const product_data = {
      id: id,
      name: name,
      price: price,
      description: description,
    }

    try {
      await axios.post(config.backendBaseURL + "/save-product", product_data)

      console.log("Producto Guardado")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.error || "Error al guardar el producto"
        )
      } else {
        throw new Error("Error al guardar el producto")
      }
    }
  }

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.title}>Editar Producto</div>
          <div className={styles.form_wrapper}>
            <div className={styles.input_title}>Nombre</div>
            <input
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <div className={styles.input_title}>Precio</div>
            <input
              className={styles.input}
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            ></input>
            <div className={styles.input_title}>Descripción</div>
            <textarea
              className={styles.text_area}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            className={styles.create_product_button}
            onClick={SaveProductOnDB}
          >
            Guardar
          </button>
        </>
      )}
    </div>
  )
}
