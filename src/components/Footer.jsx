import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-platinum-900 flex flex-col sm:grid sm:grid-cols-2 gap-5 sm:gap-3 p-5">
      <div className="flex flex-col items-center sm:items-start">
        <span className="font-bold">Links</span>
        <Link to={'*'} className="w-fit">
          Home
        </Link>
        <Link to={'*'} className="w-fit">
          About Us
        </Link>
        <Link to={'*'} className="w-fit">
          Payment Methods
        </Link>
        <Link to={'*'} className="w-fit">
          Help Center
        </Link>
        <Link to={'*'} className="w-fit">
          Contact Us
        </Link>
      </div>
      <div className="text-center sm:text-left">
        <span className="font-bold">Follow Us</span>
        <span className="flex text-5xl space-x-2 justify-center sm:justify-start">
          <a href="" target="_blank">
            <i className="fa fa-brands fa-facebook-square"></i>
          </a>

          <a href="" target="_blank">
            <i className="fa fa-brands fa-instagram"></i>
          </a>

          <a href="" target="_blank">
            <i className="fa fa-brands fa-twitter-square"></i>
          </a>
        </span>
      </div>
      <div className="mt-2 col-span-2 text-5xl flex justify-center space-x-2 text-onyx-200">
        <i className="fa fa-brands fa-credit-card"></i>
        <i className="fa fa-brands fa-cc-visa"></i>
        <i className="fa fa-brands fa-cc-mastercard"></i>
        <i className="fa fa-brands fa-cc-paypal"></i>
      </div>
    </div>
  );
};

export default Footer;
