import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductImageOnZoom from '../components/ProductImageOnZoom';
import LoadingAnimation from '../components/LoadingAnimation';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState('');
  const [cart, modifyCart] = useState([]);
  const getCartFromLocal = JSON.parse(localStorage.getItem('cart'));
  const [retrievedCart, modifyRetrievedCart] = useState(getCartFromLocal);

  const fetchProduct = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct({
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      imageUrl: data.image,
      rating: data.rating.rate,
      responses: data.rating.count,
      quantity: 0,
      totalPrice: 0,
    });
  };

  useEffect(() => {
    fetchProduct().then(() => {
      setLoading(false);
    });
    if (getCartFromLocal === null) {
      modifyRetrievedCart([]);
      return;
    }
  }, []);

  const quantityInputHandler = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const submitQuantityHandler = (event) => {
    event.preventDefault();
    if (Number.isNaN(parseInt(quantity)) || quantity === '' || !quantity) {
      return;
    }
    setProduct({
      ...product,
      quantity: product.quantity + parseInt(quantity),
      totalPrice:
        Math.round(
          product.price * (product.quantity + parseInt(quantity)) * 100
        ) / 100,
    });
    setQuantity('');
  };

  useEffect(() => {
    if (retrievedCart !== null) {
      modifyCart([...retrievedCart, product]);
      return;
    }
  }, [product]);

  useEffect(() => {
    setCartToLocal();
  }, [cart]);

  const setCartToLocal = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <section className="relative flex w-full min-h-screen flex-col">
      <Header />
      <div className="mt-24 sm:mt-28 flex-grow flex justify-center p-5 md:p-10">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <div>
            <div className="text-2xl mb-2 text-onyx-500">
              <i className="fa fa-solid fa-chevron-left"></i>
              <i className="fa fa-solid fa-chevron-left"></i>
              {` `}
              <Link to="/">Back to products</Link>
            </div>
            <div className="bg-white rounded-lg sm:flex p-5">
              <div className="flex flex-col justify-center items-center mb-auto sm:w-[60%] md:w-[45%] p-5 sm:p-15">
                <ProductImageOnZoom imageUrl={product.imageUrl} />
                <p className="hidden self-center sm:block prose text-xl mt-5">
                  (Hover over image to enlarge)
                </p>
              </div>
              <div className="flex flex-col p-5 sm:w-[40%] md:w-[55%] sm:p-10 sm:pl-0">
                <h1 className="prose mb-5 text-4xl sm:text-5xl font-bold">
                  {product.title}
                </h1>
                <h2 className="mb-5 text-4xl sm:text-5xl font-bold text-orange-peel-800">
                  &#36; {product.price}
                </h2>
                <p className="prose text-xl sm:text-2xl  leading-8 sm:leading-10">
                  {product.description}
                </p>

                <form className="mt-5">
                  <label className="prose text-xl">Quantity</label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="50"
                    value={quantity}
                    className="block border-[.1rem] rounded border-slate-300 p-3 mb-10 sm:mb-15 w-full sm:w-52"
                    onChange={quantityInputHandler}
                  ></input>
                  <button
                    onClick={submitQuantityHandler}
                    className="block border-[.1rem] rounded bg-orange-peel-500 w-full sm:w-80 py-4 px-3 text-2xl"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;
