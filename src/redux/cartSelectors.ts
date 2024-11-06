import { RootState } from "./store"

export const selectProductQuantity = (state: RootState, productId: string) => {
  const item = state.cart.products.find((item) => item.id === productId)
  return item ? item.count : 0
}
