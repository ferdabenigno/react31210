import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"; 
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const order = {
        buyer: {
            name: 'Fer',
            email: 'fer32@gmail.com',
            phone: '43531923',
            address: 'asdd'

        },
        items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quanity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore ();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))

    }

    if(cart.lenght === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    };


    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total:{totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra </button>
        </>
    );
    
};

export default Cart;