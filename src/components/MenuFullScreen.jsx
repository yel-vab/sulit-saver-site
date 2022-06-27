import React from 'react';
import { Link } from 'react-router-dom';

const MenuFullScreen = ({ totalItems }) => {
  return (
    <div className="hidden md:flex space-x-16 text-2xl">
      <Link to="/">Home</Link>
      <Link to="*">Login | Register</Link>
      <Link to="/cart" className="pr-6">
        Cart{' '}
        {Number.isNaN(totalItems) ? (
          <span>(...)</span>
        ) : totalItems === 0 || totalItems === undefined ? (
          <span>(0)</span>
        ) : totalItems !== '' ? (
          <span>({totalItems})</span>
        ) : (
          ''
        )}
      </Link>
    </div>
  );
};

export default MenuFullScreen;
