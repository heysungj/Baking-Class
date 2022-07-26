import React, { useEffect, useRef } from "react";

export default function CheckoutPage() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "cool lookling shoes",
                amount: {
                  currency_code: "USD",
                  value: 100.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
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
      <h1>Check out Page</h1>
      <div ref={paypal}></div>
    </div>
  );
}
