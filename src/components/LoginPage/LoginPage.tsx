import styles from "./LoginPage.module.css"

import { signInWithEmailAndPassword } from "@firebase/auth"

import { useEffect, useState } from "react"
import { auth } from "../../firebaseConfig"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [disabled, setDisabled] = useState(false)

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log("Usuario autenticado:", user)
      })
      .catch((error) => {
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
    </div>
  )
}
