import React from 'react';
import image from '../assets/empty-cart.png';
import { Link } from 'react-router-dom';

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-24">
      <img src={image} className="w-60 mx-auto mb-10" />
      <h2 className="text-5xl text-center">
        Your cart is looking a little empty!
      </h2>
      <Link to="/">
        <div className="text-amber-600 border border-amber-500 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-xl text-center p-4 mt-10 rounded-xl">
          Click here <br /> to fill it up with goodies
        </div>
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
