import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Bienvenidos a Celulares Fernando"/>
    </div>
  );
}

export default App;
