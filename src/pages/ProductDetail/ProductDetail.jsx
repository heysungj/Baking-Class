import "./ProductDetail.css";
import { useNavigate, useLocation } from "react-router-dom";
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
  const [disable, setDisable] = useState(true);
  //   console.log(product);

  const starterData = {
    product: product.name,
    startDate: defaultStartDate,
    classTime: "",
  };
  const [data, setData] = useState(starterData);

  const [orderInfo, setOrderInfo] = useState();

  useEffect(() => {
    const Time = async () => {
      const currentOrders = await productsAPI.getOrderByDate(defaultStartDate);
      let time = [];
      currentOrders.map((order) => {
        if (order.isPaid === true) {
          return time.push(order.classTime);
        }
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
    let startdate = Date.parse(newData.startDate);
    let defaultDate = Date.parse(defaultStartDate);

    if (startdate < defaultDate || !data.classTime) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    console.log(data);
    const currentOrders = await productsAPI.getOrderByDate(e.target.value);
    setOrderInfo(currentOrders);

    let time = [];
    currentOrders.map((order) => {
      if (order.isPaid === true) {
        return time.push(order.classTime);
      }
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

    if (!newData.classTime) {
      setDisable(true);
    } else {
      setDisable(false);
    }
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
    <div className="product">
      <h1 className="lobster">Product Detail</h1>
      <div className="row-display-detailPage">
        {/* <div className="leftContainer"> */}
        <img src={product.photo} alt="" className="productDetailImg" />
        {/* </div> */}
        <div className="rightContainer">
          <h3 className="lobster">{product.name}</h3>
          <h4>{product.description}</h4>
          <h4 className="classPrice">Class Price: $ {product.price}</h4>

          <label for="classTime" className="classTime">
            Class Date
            <input
              type="date"
              name="startDate"
              onChange={handleChangeDate}
              value={data.startDate}
            />
          </label>
          <label for="classTime" className="classTime">
            Choose a time{"  "}
            <select name="classTime" id="calss" onChange={handleChangeTime}>
              <option value="null">Select time</option>
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
          </label>
          <button
            className="btn btn-secondary"
            disabled={disable}
            onClick={() => {
              handleClick();
            }}
          >
            Book Class
          </button>
        </div>
      </div>
    </div>
  );
}
