import "./OrderCard.css";
import { useEffect, useState } from "react";
import * as productsAPI from "../../utilities/products-api";
// import { useEffect, useState } from "react";

export default function OrderCard({ order, setOrders, orders }) {
  const [disabled, setDisabled] = useState(false);
  // This gets us yesterday's time in a numbered format that we can compare to check-in's time
  // This ensures a user can't edit a reservation for  dates in the past
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  console.log("tomorrow", tomorrow);
  const tomorrowTime = tomorrow.getTime();
  console.log("tomottowTime", tomorrowTime);
  console.log("starDate", order.startDate);
  const startDate = Date.parse(order.startDate);
  console.log("star date", startDate);
  // const startDate = order.startDate.toString;
  // startDate.getTime();

  useEffect(() => {
    setDisabled(startDate < tomorrowTime ? true : false);
  }, []);

  //   Cilck Cancel button to cancel the order
  const handleClick = async () => {
    let canceledOrder = await productsAPI.cancelOrderById(order.id);
    console.log(canceledOrder);
    let restOrders = orders.filter((order) => {
      if (canceledOrder.id !== order.id) {
        return true;
      }
    });
    setOrders(restOrders);
  };

  return (
    <div className="OrderCardContainer">
      <img src={order.productPhoto} alt="" className="orderImg" />
      <div className="orderRightContainer">
        <h3 className="lobster">{order.productName}</h3>
        <h3>Order: {order.orderId}</h3>
        <h3>Price: $ {order.price}</h3>
        <h3>Class Date: {order.startDate}</h3>
        <h3> Start Time: {order.classTime}</h3>

        <button
          disabled={disabled}
          onClick={handleClick}
          className="btn btn-danger"
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  );
}
