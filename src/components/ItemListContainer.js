import React from 'react';
import ItemCount from '../components/ItemCount';
import "../components/ItemListContainer style/styles.css";

const ItemListContainer = ({greeting}) =>{

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);

    }
    return(
        
        <div className='landing'>
            <span>{greeting}</span>
            <div>
            <ItemCount initial={1} stock={3} onAdd={onAdd}/>
            </div>
        </div>
        
        

    );

};

export default ItemListContainer;