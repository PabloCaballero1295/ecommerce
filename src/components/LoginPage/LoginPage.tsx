import styles from "./LoginPage.module.css"

import { signInWithEmailAndPassword } from "@firebase/auth"

import { useEffect, useState } from "react"
import { auth } from "../../firebaseConfig"
import { Link, useNavigate } from "react-router-dom"
import { Modal } from "@mui/material"

export const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [disabled, setDisabled] = useState(false)

  const login = () => {
    setErrorMessage("")
    handleOpen()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log("Usuario autenticado:", user)
        localStorage.setItem("userId", user.uid)
        navigate("/")
      })
      .catch((error) => {
        setErrorMessage(
          "Ha ocurrido un error. Comprueba que los datos introducidos son correctos."
        )
        console.error("Error en la autenticación:", error)
      })
  }

  useEffect(() => {
    if (email.length == 0 || password.length == 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [email, password])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>Login</div>
          <div className={styles.form_wrapper}>
            <div className={styles.input_title}>Email</div>
            <input
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className={styles.input_title}>Contraseña</div>
            <input
              type="password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className={styles.login_button}
              onClick={login}
              disabled={disabled}
            >
              Login
            </button>
          </div>
          <div className={styles.register_text}>
            ¿No tienes cuenta? Regístrate <Link to="/signup"> aquí.</Link>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modal_wrapper}>
          <div>{errorMessage ? errorMessage : "Cargando"}</div>
        </div>
      </Modal>
    </div>
  )
}
