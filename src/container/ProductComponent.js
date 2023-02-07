import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("Product Dataaa", products);
  return (
    <div className="row">
      {products.map((data) => {
        return (
          <div className="col-lg-3 my-2" key={data.id}>
            <div
              className="card p-3"
              style={{
                height: "85vh",
              }}
            >
              <div className="card-image border-0">
                <Link to={`/product/${data.id}`}>
                  <img
                    style={{
                      height: "50vh",
                      imageResolution: "cover",
                    }}
                    className="img img-fluid img-thumbnail cover border-0 w-100"
                    src={data.image}
                    alt="img"
                  />
                </Link>
              </div>
              <div className="card-body">
                <div className="row">
                  <span>
                    <span className="fw-bold">Title : </span>
                    {data.title}
                  </span>
                  <span>
                    <span className="fw-bold">Price : </span>${data.price}
                  </span>
                  <span>
                    <span className="fw-bold">Category : </span>
                    {data.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
