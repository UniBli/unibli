// components
import CardBook from '../CardBook/CardBook';
// CSS scoped
import styles from './styles/ConsultarTitulos.module.css';
// hooks
import { useRef, useState, useEffect  } from 'react';

const ConsultarTitulos = () => {
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


/* FORMA DE FAZER A BARRA DE ROLAGEM DA DIV DOS LIVROS, ROLAR  QUANDO O MOUSE ESTÁ NA EXTREMIDADE*/  
  const divScrollbarBooksRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  const handleMouseMove = (event) => {
    const mouseX = event.pageX;
    const container = divScrollbarBooksRef.current;
    const containerWidth = container.offsetWidth;
    const sensitivity = 30;

    if (mouseX < sensitivity) {
      setScrollDirection(-1); // Rola para a esquerda
    } else if (mouseX > containerWidth - sensitivity) {
      setScrollDirection(1); // Rola para a direita
    } else {
      setScrollDirection(0); // Para quando o mouse estiver no meio
    }
  };

  useEffect(() => {
    let scrollTimeout;

    const smoothScroll = () => {
      if (scrollDirection !== 0) {
        const container = divScrollbarBooksRef.current;
        container.scrollLeft += scrollDirection * scrollSpeed;
        setScrollSpeed(Math.min(scrollSpeed + 1, 20)); // Limita a velocidade máxima
      } else {
        setScrollSpeed(0);
      }

      // Aguarda o próximo quadro de animação
      scrollTimeout = requestAnimationFrame(smoothScroll);
    };

    // Iniciar a função de rolagem suave
    smoothScroll();

    // Limpar o timeout quando o componente for desmontado
    return () => cancelAnimationFrame(scrollTimeout);
  }, [scrollDirection, scrollSpeed]);

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
            <div className={styles.divScrollbarBooks}
             ref={divScrollbarBooksRef}
             onMouseMove={handleMouseMove}
             onMouseLeave={() => setScrollDirection(0)}
            >
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
        </section>

    </main>
  );
}

export default ConsultarTitulos;