import sendRequest from "./send-request";

const BASE_URL = "/api/products";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function getOrderByDate(date) {
  console.log(date);
  return sendRequest(`${BASE_URL}/orders/${date}`);
}

// Add an item to the cart
export async function addClassToCart(data, product) {
  // add unpaid  class tp cart
  return sendRequest(`${BASE_URL}/cart/new`, "POST", {
    data,
    product,
  });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}
