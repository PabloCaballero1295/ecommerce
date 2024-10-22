import styles from "./Loading.module.css"
import loading from "../../assets/loading.png"
export const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <div className="container container_background">
        <div className={styles.title}>CARGANDO</div>
        <div className={styles.message}>
          El contenido se está cargando. Espere por favor
        </div>
        <div className={styles.loading_icon_container}>
          <img className={styles.loading_icon} src={loading} />
        </div>
      </div>
    </div>
  )
}
