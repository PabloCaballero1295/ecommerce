import { MainLayout } from "../MainLayout/MainLayout"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import axios from "axios"
import config from "../../config/config"
import { useEffect, useState } from "react"
import styles from "./ProfilePage.module.css"

interface UserData {
  id: string
  email: string
}

const auth = getAuth()

export const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData>({ id: "", email: "" })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchData(currentUser)
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
    <MainLayout>
      <div className="container">
        <div className={styles.title}>Perfil</div>
        <div>id: {userData.id}</div>
        <div>email: {userData.email}</div>
      </div>
    </MainLayout>
  )
}
