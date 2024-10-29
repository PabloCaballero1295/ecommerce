import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../types/product"
import { CartProduct } from "../types/cartProduct"

interface cartState {
  products: CartProduct[]
}

const initialState: cartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      console.log("Product added to cart")

      const array_copy = [...state.products]

      const index = array_copy.findIndex((p) => p.product.id == product.id)

      if (index >= 0) {
        array_copy[index].count++
      } else {
        array_copy.push({ product: product, count: 1 })
      }

      state.products = [...array_copy]
    },
    deleteAllProducts: (state) => {
      state.products = []
      console.log("Products removed from cart")
    },
  },
})

export const { addProduct, deleteAllProducts } = cartSlice.actions

export default cartSlice.reducer
