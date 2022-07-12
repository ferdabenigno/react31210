import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/itemCount style/ItemCount';
import '../../components/itemCount style/styles.css';

const ItemDetail = ({ product }) => {

    const [GoToCart, setGoToCart] = useState(false);
    const onAdd = (quantity) => {
        setGoToCart(true);
    };


    return (
        <div className="detail">
            <img src={product.image} alt={product.title} width="400" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                {
                    GoToCart
                        ? <Link to='/cart'>Terminar compra</Link>
                        : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                }
                
            </div>
        </div>
    );
};

export default ItemDetail;
