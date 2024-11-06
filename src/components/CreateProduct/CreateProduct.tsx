import { useState } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import config from "../../config/config"
import styles from "./CreateProduct.module.css"

export const CreateProduct = () => {
  const id = uuid()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

  const CreateProductOnDB = async () => {
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
      await axios.post(config.backendBaseURL + "/create-product", product_data)

      console.log("Producto Creado")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.error || "Error al crear el producto"
        )
      } else {
        throw new Error("Error al crear el producto")
      }
    }
  }

  return (
    <div className="container">
      <div className={styles.title}>Crear Producto</div>
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
        onClick={CreateProductOnDB}
      >
        Crear Producto
      </button>
    </div>
  )
}
