import sendRequest from "./send-request";

const BASE_URL = "/api/products";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function getAllOrders() {
  return sendRequest(`${BASE_URL}/user/allOrders`);
}

export function getOrderByDate(date) {
  console.log(date);
  return sendRequest(`${BASE_URL}/orders/${date}`);
}

export function getOneUserOrders() {
  return sendRequest(`${BASE_URL}/user/orders`);
}

export function cancelOrderById(orderId) {
  return sendRequest(`${BASE_URL}/user/orders/${orderId}`, "DELETE");
}

// Add an item to the cart
export async function addClassToCart(data, product) {
  // add unpaid  class tp cart
  return sendRequest(`${BASE_URL}/cart/new`, "POST", {
    data,
    product,
  });
}
// Add new Class to database
export async function addClass(newClass) {
  // add unpaid  class tp cart
  return sendRequest(`${BASE_URL}/newClass`, "POST", {
    newClass,
  });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}
