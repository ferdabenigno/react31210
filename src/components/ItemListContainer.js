import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../components/ItemCount';
import "../components/ItemListContainer style/styles.css";
import ItemList from '../components/ItemList';

const ItemListContainer = ({greeting}) =>{
    const [productosLista, setproductosLista] = useState([])
    const productos = [
        {id: '01', name: 'iphone x', precio: '60000', stock: '2'},
        {id: '02', name: 'iphone xr', precio: '80000', stock: '5'},
        {id: '03', name: 'iphone 11', precio: '100000', stock: '1'},
        {id: '04', name: 'iphone 12', precio: '150000', stock: '6'}
    ]

    const getData = new Promise ((resolve, reject) =>{

        let condicion = true
        setTimeout(() => {
            if(condicion){
                resolve(productos)
            }else{
                reject('mal')
            }    
        },3000);
    })   

    useEffect(()=>{
        getData
        .then((res)=> setproductosLista (res))
    },[])
    console.log (productosLista)
    
    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        
        <div className='landing'>
            <span>{greeting}</span>           
            <div>
            <ItemList productosLista={productosLista}/>   
            <ItemCount initial={1} stock={3} onAdd={onAdd}/>
            </div>
            
        </div>
        
        

    );

};

export default ItemListContainer;