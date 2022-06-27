import React from 'react';
import { Link } from 'react-router-dom';

const MenuMobileScreen = ({ isMobileMenuOpen, totalItems }) => {
  console.log('Total items in  ', totalItems);
  return (
    <div
      className={
        isMobileMenuOpen
          ? 'absolute w-full h-fit bg-orange-peel-200 flex flex-col space-y-4 text-right text-2xl py-4 pr-8'
          : 'hidden'
      }
    >
      <Link to="/">Home</Link>
      <Link to="*">Login | Register</Link>
      <Link to="/cart">
        Cart{' '}
        {totalItems === 0 || totalItems === undefined ? (
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

export default MenuMobileScreen;
