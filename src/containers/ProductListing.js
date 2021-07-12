import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ProductComponent } from './ProductComponent';
import { fetchProducts, setProducts } from '../redux/actions/productActions';

export const ProductListing = () => {
    const { products } = useSelector(state => state.allProducts)
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products').catch( (err) => {
    //         console.log("Err", err);
    //     } );
    //     dispatch( setProducts(response.data) );
    // };

    
    useEffect(() => {
        dispatch( fetchProducts() )
    }, [])
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
