import styles from './ReservarTitulos.module.css';

// hooks
import { useParams } from 'react-router-dom';

const ReservarTitulos = ({ books }) => {

    const { bookId } = useParams();
    const currentBook = books.find(book => parseInt(book.id) === parseInt(bookId));

    const { img: srcImg } = currentBook;//desestruturando objeto

    return (
        <div className={styles.tamanhoTela}>
            <h1>ReservarTitulos</h1>

            <br />

            <h2>ID: <span style={{ 'color': 'green' }}>{currentBook.id}</span></h2>

            <br />

            <h2>Título do livro: <span style={{ 'color': 'green' }}>{currentBook.nome}</span></h2>

            <br />

            <h2>Disponibilidade: <span style={{ 'color': 'green' }}>{currentBook.disponibilidade}</span></h2>

            <br />

            <h2>QTD: <span style={{ 'color': 'green' }}>{currentBook.qtd}</span></h2>

            <br />

            <div className='divImgBook'>
                <h2>Imagem:</h2>
                {
                    srcImg
                        ? (<img style={{ 'width': 100, 'height': 150 }} src={currentBook.img} alt={`Imagem do livro ${currentBook.nome}`} />)
                        : (<h3 style={{ 'color': 'green' }}>Imagem do livro - {currentBook.nome}</h3>)
                }
            </div>

        </div>
    )
}

export default ReservarTitulos