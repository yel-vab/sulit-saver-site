import React from 'react';
import { Link } from 'react-router-dom';

const ProductTile = ({ product }) => {
  return (
    <Link to={`product/${product.id}`}>
      <div className="rounded-tl-[2rem] rounded-br-[2rem] aspect-square relative bg-white text-black transition hover:shadow-md group">
        <img
          alt=""
          className="w-full h-full object-contain p-4"
          src={product.image}
        />
        <div className="py-3 bg-platinum-900 p-4 flex flex-col rounded-br-[2rem] transition-all group-hover:bg-orange-peel-50">
          <div className="line-clamp-1 text-xl sm:text-2xl">
            {product.title}
          </div>
          <p className="font-bold text-xl sm:text-2xl">
            &#36; {product.price.toFixed(2)}
          </p>
          <div className="self-end items-center text-xl md:text-2xl">
            <span className="text-orange-peel-500">
              <i className="fa fa-solid fa-star"></i>{' '}
            </span>
            {product.rating.rate.toFixed(1)}{' '}
            <span className="align-text-top text-base">/ 5.0</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
