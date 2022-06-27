import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import ProductGalleryPage from './pages/ProductGalleryPage';
import ProductPage from './pages/ProductPage';
import ViewCartPage from './pages/ViewCartPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductGalleryPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/cart" element={<ViewCartPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
