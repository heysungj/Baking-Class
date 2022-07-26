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
  const [selectedTime, setSelectedTime] = useState([]);
  //   console.log(product);

  const starterData = {
    product: product.name,
    startDate: defaultStartDate,
    classTime: "10:00",
  };
  const [data, setData] = useState(starterData);

  const [orderInfo, setOrderInfo] = useState();

  useEffect(() => {
    const Time = async () => {
      const currentOrders = await productsAPI.getOrderByDate(defaultStartDate);
      let time = [];
      currentOrders.map((order) => {
        return time.push(order.classTime);
      });
      setSelectedTime(time);
    };
    Time();
  }, []);

  const handleChangeDate = async (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    console.log(data);
    const currentOrders = await productsAPI.getOrderByDate(e.target.value);
    setOrderInfo(currentOrders);

    let time = [];
    currentOrders.map((order) => {
      return time.push(order.classTime);
    });
    setSelectedTime(time);
    console.log(time);
    // console.log(currentOrders);
  };

  const handleChangeTime = async (e) => {
    const newData = await {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
    console.log("handle change time new data", data);
  };

  const handleClick = async () => {
    const updatedCart = await productsAPI.addClassToCart(data, product);
    navigate("/checkout", {
      state: {
        product,
        data,
      },
    });
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

      <select name="classTime" id="calss" onChange={handleChangeTime}>
        <option
          value="10:00"
          disabled={selectedTime.includes("10:00") ? true : false}
        >
          10:00 - 12:00
        </option>
        <option
          value="13:00"
          disabled={selectedTime.includes("13:00") ? true : false}
        >
          13:00 - 15:00
        </option>
        <option
          value="15:00"
          disabled={selectedTime.includes("15:00") ? true : false}
        >
          15:00 - 17:00
        </option>
        <option
          value="17:00"
          disabled={selectedTime.includes("17:00") ? true : false}
        >
          17:00 - 19:00
        </option>
        <option
          value="19:00"
          disabled={selectedTime.includes("19:00") ? true : false}
        >
          19:00 - 21:00
        </option>
      </select>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Book Class
      </button>
    </div>
  );
}
