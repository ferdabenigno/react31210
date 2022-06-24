import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Bienvenido a COMPLEJO DON BOSCO"/>
    </div>
  );
}

export default App;
