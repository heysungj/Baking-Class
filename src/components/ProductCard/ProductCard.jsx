import "./ProductCard.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  // use navigate
  const navigate = useNavigate();
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.photo} alt="" />
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
