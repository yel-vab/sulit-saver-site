import React, { useEffect, useReducer, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import EmptyCartMessage from '../components/EmptyCartMessage';
import CartProductRow from '../components/CartProductRow';

const ViewCartPage = () => {
  const getCartFromLocal = JSON.parse(localStorage.getItem('cart'));
  const [cart, modifyCart] = useState(getCartFromLocal);
  const [totalAmount, findTotalAmount] = useState(0);
  const [totalItems, findTotalItems] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  useEffect(() => {
    findTotalAmount(cart?.reduce((a, b) => a + b.totalPrice, 0));
    findTotalItems(cart?.reduce((a, b) => a + b.quantity, 0));
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setCartIsEmpty(false);
    }

    if (totalItems === 0) {
      setCartIsEmpty(true);
    }
  }, [totalItems, cart]);

  return (
    <section className="flex w-full min-h-screen flex-col">
      <Header />
      <div className="mt-28 sm:mt-36 flex-grow sm:flex flex-col mx-auto p-5 md:p-10 sm:w-[75%]">
        {cartIsEmpty ? '' : <h2 className="text-5xl text-center">Your Cart</h2>}
        {cartIsEmpty ? (
          <EmptyCartMessage />
        ) : (
          <div className="bg-white mt-5 rounded-lg p-5 flex flex-col text-xl lg:text-2xl">
            <div className="border-b-2 border-platinum-200 w-full flex py-3 text-onyx-300 text-lg sm:text-xl">
              <div className="w-[54%] sm:w-[60%] flex justify justify-center items-center">
                Products
              </div>
              <div className="w-[12%] sm:w-[10%] flex justify-center items-center">
                Qty.
              </div>
              <div className="w-[17%] sm:w-[15%] flex justify-center items-center">
                Price
              </div>
              <div className="w-[17%] sm:w-[15%] flex justify-center items-center">
                Sub-Total
              </div>
            </div>

            {cart
              .filter((productInCart) => productInCart.quantity > 0)
              .map((productInCart) => (
                <CartProductRow product={productInCart} />
              ))}

            <div className="self-end text-right w-5/6 sm:w-full grid grid-cols-3 sm:flex sm:justify-center py-3 text-2xl md:text-3xl font-bold pr-[1.75rem] sm:pr-[1rem] md:pr-[2.5rem] xl:pr-[3rem]">
              <div className="col-span-2 sm:flex sm:justify-end sm:items-center sm:px-10">
                Total Items:
              </div>
              <div className="sm:w-fit sm:flex sm:justify-center sm:items-center sm:px-10 sm:pl-0">
                {totalItems.toLocaleString()}
              </div>
              <div className="col-span-2 sm:flex sm:justify-end sm:items-center sm:p-2 sm:px-10">
                Grand Total:
              </div>
              <div className="sm:sm:w-fit sm:flex sm:justify-center sm:items-center sm:px-10 sm:pl-0">
                {totalAmount.toLocaleString()}
              </div>
            </div>

            <div className="flex flex-col  sm:flex-row my-5 justify-between">
              <Link to="/">
                <div className="p-3 sm:p-4 mb-5 sm:mb-0 sm:text-3xl text-center border border-zinc-300 bg-zinc-200 hover:border-yellow-200 hover:bg-yellow-300 text-zinc-900 rounded-lg">
                  <span className="relative sm:static">
                    <i className="fa fa-solid fa-arrow-left text-zinc-800 absolute left-[-2rem] top-1 sm:static"></i>{' '}
                    Continue Shopping
                  </span>
                </div>
              </Link>
              <button className="p-3 sm:p-4 sm:text-3xl border border-amber-300 bg-amber-400 hover:border-lime-300 hover:bg-lime-400 rounded-lg ">
                <span className="relative sm:static">
                  Checkout all {totalItems} Items{' '}
                  <i className="fa fa-solid fa-arrow-right absolute sm:static right-[-2rem] top-1"></i>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default ViewCartPage;
