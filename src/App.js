import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./container/Header";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/ProductListing";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
