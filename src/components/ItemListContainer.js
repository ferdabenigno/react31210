import React from 'react';
import "../components/ItemListContainer style/styles.css";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className='landing'>
            <span>{greeting}</span>
        </div>

    );

};

export default ItemListContainer;