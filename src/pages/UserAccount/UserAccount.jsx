import React from "react";
import * as productsAPI from "../../utilities/products-api";
import { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const List = async () => {
      const allOrders = await productsAPI.getOneUserOrders();

      setOrders(allOrders);
      console.log(allOrders);
    };
    List();
  }, []);

  return (
    <>
      <h1 className="lobster">OrderHistoryPage</h1>
      {orders.map((order, index) => {
        return <OrderCard order={order} key={index} />;
      })}
    </>
  );
}
