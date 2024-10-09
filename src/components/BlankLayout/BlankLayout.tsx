import styles from "./BlankLayout.module.css"

interface BlankLayoutProps {
  children: JSX.Element
}

export const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <div className={styles.main_layout}>
      <div className={styles.main_layout_content}>{children}</div>
    </div>
  )
}
