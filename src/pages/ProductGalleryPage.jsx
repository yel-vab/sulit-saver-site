import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CategoryFilterButton from '../components/CategoryFilterButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductTile from '../components/ProductTile';
import LoadingAnimation from '../components/LoadingAnimation';

const ProductGalleryPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryHeader, setCategoryHeader] = useState('All Products');
  const [isLoading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <section className="flex w-full min-h-screen flex-col">
      <Header />
      <div className="mt-24 flex-grow sm:flex p-5 md:p-10">
        <div className="text-2xl grid grid-cols-2 justify-center gap-5 sm:flex sm:flex-col sm:justify-start mb-5">
          <h3 className="text-xl text-center italic col-span-2 text-onyx-200 sm:text-left">
            Shop All Products
          </h3>
          <CategoryFilterButton
            products={products}
            setFilteredProducts={setFilteredProducts}
            categoryFilter={'all'}
            categoryButtonText={'All Products'}
            setCategoryHeader={setCategoryHeader}
          />
          <h3 className="text-xl text-center italic col-span-2 text-onyx-200 sm:text-left">
            Shop by Category
          </h3>
          <CategoryFilterButton
            products={products}
            setFilteredProducts={setFilteredProducts}
            categoryFilter={'electronics'}
            categoryButtonText={'Electronics'}
            setCategoryHeader={setCategoryHeader}
          />
          <CategoryFilterButton
            products={products}
            setFilteredProducts={setFilteredProducts}
            categoryFilter={'jewelery'}
            categoryButtonText={'Jewelry'}
            setCategoryHeader={setCategoryHeader}
          />
          <CategoryFilterButton
            products={products}
            setFilteredProducts={setFilteredProducts}
            categoryFilter={"men's clothing"}
            categoryButtonText={"Men's Wear"}
            setCategoryHeader={setCategoryHeader}
          />
          <CategoryFilterButton
            products={products}
            setFilteredProducts={setFilteredProducts}
            categoryFilter={"women's clothing"}
            categoryButtonText={"Women's Wear"}
            setCategoryHeader={setCategoryHeader}
          />
        </div>
        <div className="w-full flex flex-col flex-grow">
          <h1 className="text-onyx-500 italic text-4xl p-5 text-center sm:text-left sm:p-0 sm:pb-5 sm:pl-10 md:pb-10 sm:text-6xl">
            {categoryHeader}
          </h1>
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 sm:pl-5 md:pl-10">
              {filteredProducts.map((product) => (
                <ProductTile key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductGalleryPage;
