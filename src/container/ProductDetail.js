import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  setProducts,
  setSelectedProducts,
} from "../redux/actions/productAction";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          dispatch(setSelectedProducts(res.data));
          setLoading(true);
        });
    };
    fetchProducts();

    return () => {
      dispatch(removeSelectedProducts());
      setLoading(false);
    };
  }, []);
  return (
    <div className="container">
      {loading === true ? (
        <div className="card border-0">
          <div className="card-image text-center">
            <img alt="img" src={products.image} className="img img-fluid" />
          </div>
          <div className="card-body row">
            <span className="fs-3">
              <span className="fs-1 fw-bold">Title : </span>
              {products.title}
            </span>
            <span className="fs-3">
              <span className="fs-1 fw-bold">Price : </span>${products.price}
            </span>
            <span className="fs-3">
              <span className="fs-1 fw-bold">Description : </span>
              {products.description}
            </span>
          </div>
        </div>
      ) : (
        <div>Loading.. 😃</div>
      )}
    </div>
  );
};

export default ProductDetail;
