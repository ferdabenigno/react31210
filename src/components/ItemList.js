import React from "react";

const ItemList = ({productosLista}) => {
    
    return(
       <div>
        <h3>Lista de productos</h3>
        {productosLista.map((producto)=><p key={producto.id}>{producto.name}</p>)}

       </div>       
    )

}

export default ItemList