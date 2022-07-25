import "./ProductDetail.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function ProductCard() {
  // use navigate
  const navigate = useNavigate();
  const { state } = useLocation();
  let { product } = state;
  console.log(product);

  return (
    <div>
      <h3>Product Detail</h3>
      <h1>{product.name}</h1>
      <img src={product.photo} alt="" />
      <h4>{product.description}</h4>
      <h3>{product.price}</h3>
      <button
        onClick={() => {
          navigate(`/${product.id}`, {
            state: {
              product,
            },
          });
        }}
      >
        Check Details
      </button>
    </div>
  );
}
