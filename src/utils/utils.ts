export const priceDisplay = (price: number) => {
  return (Math.round(price * 100) / 100).toFixed(2)
}

export const checkUserIsLogged = () => {
  const user_id = window.localStorage.getItem("userId")
  if (user_id) {
    return true
  }

  return false
}

export const checkUserIsAdmin = () => {
  const user_admin = window.localStorage.getItem("admin")
  if (user_admin) {
    return true
  }

  return false
}
