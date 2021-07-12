import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductComponent } from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';

export const ProductListing = () => {
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products').catch( (err) => {
    //         console.log("Err", err);
    //     } );
    //     dispatch( setProducts(response.data) );
    // };

    
    useEffect(() => {
        dispatch( fetchProducts() )
    }, [ dispatch ])
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
