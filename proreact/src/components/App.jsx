import './App.css';
import React from 'react';
import Count from './itemCount/itemCount';
import Navbar from './Navbar/Navbar';
import ItemListConteiner from './ItemListConteiner/ItemListConteiner';
const valor = 10
const App = () => {
  return (
    <div className='divPrincipal'>
        <Navbar />
      <Count />
      <h1>hola</h1>
      <p>{valor}</p>
      <input type="text" />
  <ItemListContainer  greeting="Bienvenidos a mi pagina"/>
    </div>
  );
}

export default App;

