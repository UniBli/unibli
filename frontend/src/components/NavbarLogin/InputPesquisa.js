// components
import { InputText } from 'primereact/inputtext';
// hooks
import { useState } from 'react';
// CSS scoped
import styles from './styles/InputPesquisa.module.css';

const InputPesquisa = () => {

    // gerenciando estados
    const [search, setSearch] = useState('');
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // função que bloqueia o carregamento da página após o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch('');
        console.log('Busca efetuada!');
    }
    console.log(search);

    return (
        <div className={styles.containerInputPesquisa}>
            <form onSubmit={handleSubmit}
                className='p-inputgroup'
            >
                <InputText
                    placeholder='Pesquise pelo título desejado' 
                    className={styles.inputPesquisa}
                    name='search'
                    onChange={handleSearch}
                    value={search}
                />
                <button
                    type='submit'
                    className={styles.buttonPesquisa}
                >
                    <i className='pi pi-search'></i>
                </button>
            </form>
        </div>      
    );
};

export default InputPesquisa;
