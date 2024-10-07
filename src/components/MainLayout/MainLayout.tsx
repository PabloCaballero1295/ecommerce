import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/NavBar"
import styles from "./MainLayout.module.css"

interface MainLayoutProps {
  children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.main_layout}>
      <NavBar />
      <div className={styles.main_layout_content}>{children}</div>
      <Footer />
    </div>
  )
}
