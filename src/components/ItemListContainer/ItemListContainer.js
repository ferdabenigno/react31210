import React, { useEffect, useState } from 'react';
import { getFirestore, collection , getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
import { getProds } from '../../Mocks/FakeApi';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    //console.log(parametro.categoryId);
   
    useEffect(() => {
        setLoading(true);

        const URL = categoryId 
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';


        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .finally(() => {
                setLoading(false);
            });

         getProds(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
    }, [categoryId]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if(categoryId){
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)    
            .then(res => setProducts (res.docs.map(product => ({id: product.id, ...product.data()}))));    
        } else{
            getDocs(queryCollection)
                .then(res => setProducts (res.docs.map(product => ({id: product.id, ...product.data()}))));   
        }
     }, [categoryId]);

    
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;

