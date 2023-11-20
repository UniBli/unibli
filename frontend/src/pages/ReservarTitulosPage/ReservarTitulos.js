import styles from './ReservarTitulos.module.css';

// hooks
import { useParams } from 'react-router-dom';

const ReservarTitulos = ({ books }) => {

    const { bookId } = useParams();
    const currentBook = books.find((book => parseInt(book.id) === parseInt(bookId)))
    console.log(currentBook);

    return (
        <div className={styles.tamanhoTela}>
            <h1>ReservarTitulos</h1>
            <br/>
            <h2>ID: {currentBook.id}</h2>
            <h2>Título do livro: {currentBook.nome}</h2>
            <h2>Disponibilidade: {currentBook.disponibilidade}</h2>
            <h2>QTD: {currentBook.qtd}</h2>
            <div>
                <h2>Imagem:</h2>
                <img style={{'width':100, 'height':150}} 
                src={currentBook.img} 
                
                alt={`Imagem do livro ${currentBook.nome}`}/> 
            </div>

        </div>
    )
}

export default ReservarTitulos