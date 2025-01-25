import React from 'react';
import Product from './Product';
import './ProductList.css'; // Import your CSS file


const ProductList = ({ products }) => {
  
  

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.productId} product={product} />

      ))}
       
    </div>
  );
};

export default ProductList;
