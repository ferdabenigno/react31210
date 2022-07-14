import React, {useState, useContext} from 'react';

const CartContext = React.createContext ('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    
   /* const addProduct = (item, newQuantity) =>{
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart);
    }

    console.log('carrito', cart);*/
    const addProduct = (item, quantity) =>{
        if (isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else{
            setCart([...cart, { ...item, quantity}]);
        }
    }
    console.log('carrito', cart)

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false ;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));




    return (
        <CartContext.Provider value= {{
            clearCart,
            isInCart,
            removeProduct,
            addProduct

        }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;