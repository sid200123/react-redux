import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        dispatch(setProducts(res.data));
      });
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
