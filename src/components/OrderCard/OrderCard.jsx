import "./OrderCard.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";
// import { useEffect, useState } from "react";

export default function OrderCard({ order }) {
  const handleClick = async () => {};

  return (
    <div>
      <h3>{order.ProductName}</h3>
      <img src={order.productPhoto} alt="" />
      <h3>{order.price}</h3>
      <h3>{order.startDate}</h3>
      <h3>{order.classTime}</h3>

      <button
        onClick={() => {
          handleClick();
        }}
      >
        Cancel Reservation
      </button>
    </div>
  );
}
