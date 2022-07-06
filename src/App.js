import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';



function App() {
  const greeting= "Bienvenidos a CelularesFernando!"
  return (
    <>
     <NavBar/>
     <ItemListContainer greeting={greeting}/>
     <ItemCount/>
    </>
  );
}

export default App;
