// components
import NavBar from "./components/NavbarLogin/NavBar";
import FooterPage from "./components/FooterPage/FooterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// hooks
import { useAuth0 } from "@auth0/auth0-react";
//import { useState, useEffect } from "react";

// pages
import Settings from './pages/SettingsPage/Settings.js';
import ConsultarTitulos from './pages/ConsultarTitulosPage/ConsultarTitulos.js';
import DetalhesReserva from './pages/DetalhesReservaPage/DetalhesReserva.js';
import ManterAcervo from './pages/ManterAcervoPage/ManterAcervo.js';
import ReservarTitulos from './pages/ReservarTitulosPage/ReservarTitulos.js';

// styles
import './App.css'

// Base URL do Back (json-server)
//const url = 'http://localhost:3000/books'

const App = () => {
  // hook do auth0
  const {isAuthenticated} = useAuth0();

  //GET - Para obter os livros (json-server)
  /*
  const [books, setbooks] = useState([]);
  useEffect(() => {  
    const fetchData = async () => {
      const res = await fetch(url); 
      const data = await res.json();
      setbooks(data);
    };
    fetchData();
  }, []);
  */

  //Objeto de teste
  const books =[
    {id:1, disponibilidade: 1, qtd: 1, img:'https://books.google.com.br/books/publisher/content?id=MWkOEAAAQBAJ&hl=pt-BR&pg=PA2&img=1&zoom=3&sig=ACfU3U2bTyWRW6_GMC3Qh3gqEkM8hKxBLg&w=1280', nome:'Livro TESTE1'},
    {id:2, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE2'},
    {id:3, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE3'},
    {id:4, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE4'},
    {id:5, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:6, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:7, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
    {id:8, disponibilidade: 1, qtd: 1, img:'', nome:'Livro TESTE5'},
  ]

  return (
    <>
      <BrowserRouter>
        
        <NavBar isAuthenticated={isAuthenticated} />
        
        <Routes>
          <Route path="/" element={<ConsultarTitulos books={books}/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/bookingDetails" element={<DetalhesReserva/>}/>
          <Route path="/maintainCollection" element={<ManterAcervo/>}/>
          <Route path="/reservarTitulos/:bookId" element={<ReservarTitulos books={books}/>}/>
        </Routes>    
      </BrowserRouter>

     
      <FooterPage/>
    </>
  );
}

export default App;
