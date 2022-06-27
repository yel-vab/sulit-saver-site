import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuFullScreen from './MenuFullScreen';
import MenuMobileScreen from './MenuMobileScreen';

const Header = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const getCartFromLocal = () => JSON.parse(localStorage.getItem('cart'));
  const [cart, modifyCart] = useState(getCartFromLocal);
  const [totalItems, findTotalItems] = useState(0);

  useEffect(() => {
    findTotalItems(cart?.reduce((a, b) => a + b.quantity, 0));
  }, [cart]);

  useEffect(() => {
    setInterval(() => {
      modifyCart(getCartFromLocal);
    }, 500);
  }, []);

  return (
    <header className="fixed w-full z-50">
      <div className="h-fit bg-orange-400 p-6 flex justify-between items-center relative">
        <span className="text-4xl sm:text-5xl">
          <Logo />
        </span>
        <MenuFullScreen totalItems={totalItems} />
        <button
          className="md:hidden text-3xl"
          onClick={() => {
            toggleMobileMenu(!isMobileMenuOpen);
          }}
        >
          Menu
        </button>
      </div>
      <div className="md:hidden">
        <MenuMobileScreen
          isMobileMenuOpen={isMobileMenuOpen}
          totalItems={totalItems}
        />
      </div>
    </header>
  );
};

export default Header;
