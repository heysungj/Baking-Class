import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";

export default function CheckoutPage() {
  const paypal = useRef();
  const { state } = useLocation();
  let { product, data } = state;
  console.log("checkoutpage data", data);
  const [isPaid, setIsPaid] = useState(false);

  //   Use Paypal Api
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: product.name,
                amount: {
                  currency_code: "USD",
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order) {
            productsAPI.checkout();
            setIsPaid(true);
          }
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  });
  return (
    <div>
      {isPaid ? <h1>Order Confirmation</h1> : <h1>Check out Page</h1>}
      <h3>{product.name}</h3>
      <img src={product.photo} alt="" />
      <h4>Date: {data.startDate}</h4>
      <h4>Class time: {data.classTime} </h4>
      <h4>Total Price: $ {product.price}</h4>
      {isPaid ? (
        <Link to="/users/myAccount">
          <button>My Account</button>{" "}
        </Link>
      ) : (
        <div ref={paypal}></div>
      )}
    </div>
  );
}
