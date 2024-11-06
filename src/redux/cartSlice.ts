import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductItem } from "../types/cartProduct"
import { CartProduct } from "../types/cartProduct"

interface CartData {
  products: CartProduct[]
}

const initialState: CartData = {
  products: [],
}

const cartKey = "cart"

const cartLocalStorageData = localStorage.getItem(cartKey)

const saveStateOnLocalStorage = (data: CartData) => {
  localStorage.setItem(cartKey, JSON.stringify(data))
}

export const cartSlice = createSlice({
  name: "cart",
  initialState:
    cartLocalStorageData != null
      ? (JSON.parse(cartLocalStorageData) as CartData)
      : initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductItem>) => {
      const product = action.payload
      console.log("Product added to cart")

      const array_copy = [...state.products]

      const index = array_copy.findIndex((p) => p.id == product.id)

      if (index >= 0) {
        array_copy[index].count++
      } else {
        array_copy.push({
          id: product.id,
          name: product.name,
          price: product.price,
          count: 1,
        })
      }

      state.products = [...array_copy]
      saveStateOnLocalStorage(state)
    },
    decreaseProduct: (state, action: PayloadAction<ProductItem>) => {
      const product = action.payload
      console.log("Product decrease on cart")

      const array_copy = [...state.products]

      const index = array_copy.findIndex((p) => p.id == product.id)

      if (index >= 0) {
        if (array_copy[index].count > 1) {
          array_copy[index].count--
        } else {
          array_copy.splice(index, 1)
        }
      }

      state.products = [...array_copy]
      saveStateOnLocalStorage(state)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload
      console.log("Removed product on cart")

      const array_copy = [...state.products]

      const index = array_copy.findIndex((p) => p.id == productId)

      if (index >= 0) {
        array_copy.splice(index, 1)
      }

      state.products = [...array_copy]
      saveStateOnLocalStorage(state)
    },
    deleteAllProducts: (state) => {
      state.products = []
      console.log("Products removed from cart")
      saveStateOnLocalStorage(state)
    },
  },
})

export const { addProduct, decreaseProduct, removeProduct, deleteAllProducts } =
  cartSlice.actions

export default cartSlice.reducer
