// components
import CardBook from '../CardBook/CardBook';
// CSS scoped
import styles from './styles/ConsultarTitulos.module.css';


function ConsultarTitulos() {
  // objeto de teste
  const books =[
    {id:1, disponibilidade: 1, qtd: 1, img:'https://books.google.com.br/books/publisher/content?id=MWkOEAAAQBAJ&hl=pt-BR&pg=PA2&img=1&zoom=3&sig=ACfU3U2bTyWRW6_GMC3Qh3gqEkM8hKxBLg&w=1280', nome:'Livro TESTE1'},
    {id:2, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE2'},
    {id:3, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE3'},
    {id:4, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE4'},
    {id:5, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:5, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:5, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:5, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
  ]

  return (
    <section id='consultarTitulos'>

      <section className={styles.banner}>
        <div className={styles.txtBanner}>
          <p>O sistema <span>UniBli</span> veio</p>
          <p>para facilitar a vida do</p>
          <p>leitor Fatecano, que</p>
          <p>mora longe da sua</p>
          <p>unidade!</p>
        </div>
      </section>
      
     <div className={styles.main}>    
          <div className={styles.containerBooks}>
            <h2>Análise e Desenvolvimento de Sistemas:</h2>
            <div className={styles.divScrollbarBooks}>
              {books.map((book) => (
                <CardBook key={book.id} disponibilidade={book.disponibilidade} 
                        qtd={book.qtd} img={book.img} nome={book.nome}
                />
              ))}
            </div>
          </div> 

          <div className={styles.containerBooks}>
            <h2>Gestão de Recursos Humanos:</h2>
            <div className={styles.divScrollbarBooks}>
              {books.map((book) => (
                <CardBook key={book.id} disponibilidade={book.disponibilidade} 
                        qtd={book.qtd} img={book.img} nome={book.nome}
                />
              ))}
            </div>
          </div>   

          <div className={styles.containerBooks}>
            <h2>Gestão Comercial:</h2>
            <div className={styles.divScrollbarBooks}>
              {books.map((book) => (
                <CardBook key={book.id} disponibilidade={book.disponibilidade} 
                        qtd={book.qtd} img={book.img} nome={book.nome}
                />
              ))}
            </div>
          </div>
        </div>

    </section>
  );
}

export default ConsultarTitulos;