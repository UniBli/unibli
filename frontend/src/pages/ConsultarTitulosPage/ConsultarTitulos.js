// components
import CardBook from '../../components/CardBook/CardBook';
import { Link } from 'react-router-dom';

// CSS scoped
import styles from './styles/ConsultarTitulos.module.css';

const ConsultarTitulos = ({ books }) => {

  return (
    <main>
      <section className={styles.banner}>
        <img className={styles.imgBanner} src="./img_banner.png" alt="" />
        <div className={styles.txtBanner}>
          <p>O sistema <span>UniBli</span> veio</p>
          <p>para facilitar a vida do</p>
          <p>leitor Fatecano, que</p>
          <p>mora longe da sua</p>
          <p>unidade!</p>
        </div>
      </section>

      <section className={styles.books}>
        <div className={styles.containerBooks}>
          <h2>Análise e Desenvolvimento de Sistemas:</h2>
          <div className={styles.divScrollbarBooks}>
            {books.map((book) => (
              <Link key={book.id} to={`/reserveTitles/${book.id}`}>
                <CardBook disponibilidade={book.disponibilidade}
                  qtd={book.qtd} img={book.img} nome={book.nome}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.containerBooks}>
          <h2>Gestão de Recursos Humanos:</h2>
          <div className={styles.divScrollbarBooks}>
            {books.map((book) => (
              <Link key={book.id}  to={`/reserveTitles/${book.id}`}>
                <CardBook disponibilidade={book.disponibilidade}
                  qtd={book.qtd} img={book.img} nome={book.nome}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.containerBooks}>
          <h2>Gestão Comercial:</h2>
          <div className={styles.divScrollbarBooks}>
            {books.map((book) => (
              <Link key={book.id} to={`/reserveTitles/${book.id}`}>
                <CardBook disponibilidade={book.disponibilidade}
                  qtd={book.qtd} img={book.img} nome={book.nome}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default ConsultarTitulos;