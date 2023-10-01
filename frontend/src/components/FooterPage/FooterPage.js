//CSS scoped
import styles from './styles/FooterPage.module.css';

const FooterPage = () => {
  return (
    <>
      <section id={styles.footer}>
        <div className={styles.logoUniBli}>
          <img
            src='./img/logoUniBli+Texto_F-Negativo.svg'
            className='d-inline-block align-top'
            alt='Logo UniBli'
          />
          <small>Todos os direitos reservados a ©UniBli</small>
        </div>

        <small>Feito com <span role='img' aria-label='Coração verde'>💚</span> por, Thyago, Weslley e Hélio</small>
        <small>Orientador  Rodrigo Bossini</small>

      </section>
    </>
  );
};

export default FooterPage;