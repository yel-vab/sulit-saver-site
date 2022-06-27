import React from 'react';
import { Link } from 'react-router-dom';

const ProductAddedPopUp = () => {
  return (
    <div className="fixed bg-tiffany-blue-100 text-tiffany-blue-900 shadow-[3px_3px_1px_0px_rgba(0,0,0,0.2)] bottom-10 right-10 p-5 text-center rounded-lg">
      Cart updated! <br />
      <Link to={'/cart'}>
        <span className="font-bold underline hover:text-black">
          Take a look?
        </span>
      </Link>
    </div>
  );
};

export default ProductAddedPopUp;
