import React from 'react';
import { Link } from 'react-router-dom';

const CartProductRow = ({ product }) => {
  return (
    <div className="border-b-2 border-platinum-200 w-full flex py-3">
    
    <div className="w-[23%] sm:w-[18%] flex justify justify-center items-center p-3">
    <Link to={`/product/${product.id}`}>
        <img
          className="object-contain aspect-square max-w-[75%] max-h-[75%] sm:max-w-[8rem] sm:max-h-[8rem]"
          src={product.imageUrl}
        />
        </Link>
      </div>
      <div className="w-[31%] sm:w-[42%] flex justify-start items-center px-2">
      <Link to={`/product/${product.id}`}>
      <span className=" line-clamp-3">{product.title}</span>
      </Link>
      </div>
      <div className="w-[12%] sm:w-[10%] flex justify-center items-center">
        {product.quantity}
      </div>
      <div className="w-[17%] sm:w-[15%] flex justify-center items-center">
        {product.price.toLocaleString()}
      </div>
      <div className="w-[17%] sm:w-[15%] flex justify-center items-center">
        {parseFloat(product.totalPrice.toFixed(2)).toLocaleString()}
      </div>
    </div>
  );
};

export default CartProductRow;
