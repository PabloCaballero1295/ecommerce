import styles from "./SignUpPage.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import config from "../../config/config"

export const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [emailIsCorrect, setEmailIsCorrect] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const navigate = useNavigate()

  const createUser = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post(
        config.backendBaseURL + "/create-user",
        {
          email,
          password,
        }
      )

      console.log("Usuario creado exitosamente, UID:", response.data.uid)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.error || "Error al crear el usuario"
        )
      } else {
        throw new Error("Error al crear el usuario")
      }
    }
  }

  const isValidEmail = (email_: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email_)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    if (!isValidEmail(e.target.value)) {
      setEmailError("El correo electrónico no es válido")
      setEmailIsCorrect(false)
    } else {
      setEmailError("")
      setEmailIsCorrect(true)
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

    if (e.target.value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres")
      setPasswordIsCorrect(false)
    } else {
      setPasswordError("")
      setPasswordIsCorrect(true)
    }
  }

  const goToHome = () => {
    navigate("/")
  }

  useEffect(() => {
    if (emailIsCorrect && passwordIsCorrect) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [emailIsCorrect, passwordIsCorrect])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <div className={styles.logo} onClick={goToHome}>
            Ecommerce
          </div>
          <div className={styles.title}>Registrarse</div>
          <div className={styles.form_wrapper}>
            <div className={styles.input_title}>Email</div>
            <input
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={handleEmailChange}
            ></input>
            {emailError ? (
              <div className={styles.input_error}>{emailError}</div>
            ) : null}
            <div className={styles.input_title}>Contraseña</div>
            <input
              type="password"
              placeholder="contraseña"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            {passwordError ? (
              <div className={styles.input_error}>{passwordError}</div>
            ) : null}
            <button
              className={styles.signup_button}
              onClick={() => {
                createUser(email, password)
              }}
              disabled={disabled}
            >
              Registrarse
            </button>
          </div>
          <div className={styles.register_text}>
            ¿Ya tienes una cuenta? Inicia sesión <Link to="/login"> aquí.</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
