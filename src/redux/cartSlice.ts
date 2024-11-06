import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductItem } from "../types/cartProduct"
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
    },
    deleteAllProducts: (state) => {
      state.products = []
      console.log("Products removed from cart")
    },
  },
})

export const { addProduct, decreaseProduct, removeProduct, deleteAllProducts } =
  cartSlice.actions

export default cartSlice.reducer
