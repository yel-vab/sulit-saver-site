import React from 'react';
import image from '../assets/not-found-illustration-cropped.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="flex w-full flex-col min-h-screen">
      <Header />
      <div className="mt-28 sm:mt-36 flex-grow sm:flex flex-col mx-auto p-5 md:p-10 sm:w-[75%]">
        <div className="flex flex-col justify-center items-center mb-10 px-3">
          <img src={image} className="w-[40rem] mx-auto" />
          <Link to="/">
            <div className="text-amber-600 border border-amber-500 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-xl text-center p-4 rounded-xl">
              Return to Homepage
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NotFoundPage;
