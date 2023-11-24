import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <section className={styles.sectionNotFound}>
        <img src='../imgStatus/404-bro.svg' alt='Ilustração de página não encontrada'/>
        <h1 className={styles.txtNotFound}>Página não encontrada
        </h1>
        <small>:'-(</small>
    </section>
  )
}

export default NotFound