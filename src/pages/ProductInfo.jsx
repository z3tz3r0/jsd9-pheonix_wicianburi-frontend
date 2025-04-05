import React from 'react';
import { useParams } from 'react-router';


const ProductInfo = () => {
    let params = useParams();
    params.productId;

    return (
        <div>ProductInfo</div>
    )
}

export default ProductInfo