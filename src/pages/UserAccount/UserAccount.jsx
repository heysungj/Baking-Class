import React from "react";
import * as productsAPI from "../../utilities/products-api";
import { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const List = async () => {
      const allOrders = await productsAPI.getAllOrders();

      setOrders(allOrders);
      console.log(allOrders);
    };
    List();
  }, []);

  return (
    <>
      <h1>OrderHistoryPage</h1>
    </>
  );
}
