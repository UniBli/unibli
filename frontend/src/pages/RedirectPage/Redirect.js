import styles from './Redirect.module.css'

const Redirect = () => {
    return (
        <section className={styles.sectionRedirect}>
        <img src='../imgStatus/redirectLogin-bro.svg'/>
        <h1 className={styles.txtRedirect}>Estamos redirecionando você para a página de login! 
        </h1>
        <small>Aguarde... </small>
    </section>
  )
}

export default Redirect