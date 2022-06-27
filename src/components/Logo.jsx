import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-['Roboto_Condensed'] italic text-black">
        Sulit<span className="font-bold">Saver</span>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </Link>
  );
};

export default Logo;
