import React, { useState, useEffect } from 'react';
import { getFirestore, doc , getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', id);
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data() }))
        .then(setLoading(false));
     }, [id]);

        return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;