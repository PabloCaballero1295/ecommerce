import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import axios from "axios"
import config from "../../config/config"
import { useEffect, useState } from "react"
import styles from "./ProfilePage.module.css"
import { Loading } from "../Loading/Loading"

interface UserData {
  id: string
  email: string
}

const auth = getAuth()

export const ProfilePage = () => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState<UserData>({ id: "", email: "" })

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchData(currentUser)
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const fetchData = async (user: User) => {
    try {
      const response = await axios.get(
        config.backendBaseURL + "/user_profile/" + user.uid
      )

      setUserData(response.data as UserData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.title}>Perfil</div>
          <div>id: {userData.id}</div>
          <div>email: {userData.email}</div>
        </>
      )}
    </div>
  )
}
