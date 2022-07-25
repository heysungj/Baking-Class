import "./ProductDetail.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";
import { useEffect, useState } from "react";

export default function ProductCard() {
  let defaultStartDate = new Date();
  defaultStartDate = defaultStartDate.toISOString().slice(0, 10);
  // use navigate
  const navigate = useNavigate();
  const { state } = useLocation();
  let { product } = state;
  let time;
  //   console.log(product);

  const starterData = {
    product: product.name,
    startDate: defaultStartDate,
    classTime: null,
  };
  const [data, setData] = useState(starterData);

  const [orderInfo, setOrderInfo] = useState();

  const handleChangeDate = async (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    console.log(data);
    const currentOrders = await productsAPI.getOrderByDate(e.target.value);
    setOrderInfo(currentOrders);

    time = [];
    currentOrders.map((order) => {
      return time.push(order.classTime);
    });
    console.log(time);
    // console.log(currentOrders);
  };

  const handleChangeTime = async (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    console.log(data);
  };
  return (
    <div>
      <h3>Product Detail</h3>
      <h1>{product.name}</h1>
      <img src={product.photo} alt="" />
      <h4>{product.description}</h4>
      <h3>{product.price}</h3>

      <label>
        <input
          type="date"
          name="startDate"
          onChange={handleChangeDate}
          value={data.startDate}
        />
      </label>

      <label for="classTime">Choose a time:</label>

      <select name="class time" id="calss" onChange={handleChangeTime}>
        <option value="10:00">10:00 - 12:00</option>
        <option value="13:00">13:00 - 15:00</option>
        <option value="15:00">15:00 - 17:00</option>
        <option value="17:00">17:00 - 19:00</option>
      </select>
      <button
        onClick={() => {
          navigate(`/${product.id}`, {
            state: {
              product,
            },
          });
        }}
      >
        Book Class
      </button>
    </div>
  );
}
