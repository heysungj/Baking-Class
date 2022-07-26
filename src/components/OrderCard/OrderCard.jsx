import "./OrderCard.css";
import { useEffect, useState } from "react";
import * as productsAPI from "../../utilities/products-api";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function OrderCard({ order, setOrders, orders, reloadData }) {
  const navigate = useNavigate();
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
    console.log("inside useeffect startdate", startDate);
    console.log("inside useeffect tomorrowTime", tomorrowTime);
    setDisabled(startDate < tomorrowTime ? true : false);
  }, []);

  //   Cilck Cancel button to cancel the order
  const handleClick = async () => {
    // debugger;
    let canceledOrder = await productsAPI.cancelOrderById(order.id);
    console.log(canceledOrder);
    navigate(0);
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

        {disabled ? (
          <p style={{ color: "red" }}>cancellation can not be made</p>
        ) : (
          <button onClick={handleClick} className="btn btn-danger">
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}
