import "./OrderCard.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";
// import { useEffect, useState } from "react";

export default function OrderCard({ order }) {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  // This gets us yesterday's time in a numbered format that we can compare to check-in's time
  // This ensures a user can't edit a reservation for  dates in the past
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const convertedTmr = new Date(tomorrow.toUTCString());
  console.log(convertedTmr);
  const tomorrowTime = convertedTmr.getTime();

  useEffect(() => {
    setDisabled(order.startDate < tomorrowTime ? true : false);
  }, []);

  //   Cilck Cancel button to cancel the order
  const handleClick = async () => {
    let canceledOrder = await productsAPI.cancelOrderById(order.id);
    console.log(canceledOrder);
    navigate(0);
  };

  return (
    <div className="OrderCardContainer">
      <img src={order.productPhoto} alt="" />
      <div>
        <h3>{order.productName}</h3>
        <h3>Order: {order.orderId}</h3>
        <h3>Price: $ {order.price}</h3>
        <h3>Class Date: {order.startDate}</h3>
        <h3> Start Time: {order.classTime}</h3>

        <button disabled={disabled} onClick={handleClick}>
          Cancel Reservation
        </button>
      </div>
    </div>
  );
}
