import styles from "./Footer.module.css"

export const Footer = () => {
  const openPortfolio = () => {
    window.open("https://pablocaballero1295.github.io/Portfolio/", "_blank")
  }

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.links_title}>ENLACES</div>
          <div className={styles.links}>
            <div className={styles.link_item} onClick={openPortfolio}>
              PORTFOLIO
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
