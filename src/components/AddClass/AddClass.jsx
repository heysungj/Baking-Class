import { toast } from "react-toastify";
import { useState } from "react";
export default function AddClass() {
  const [newClass, setNewClass] = useState();

  const handleChange = (e) => {
    const cardData = {
      ...cardinfo,
      [e.target.name]: e.target.value,
    };

    setCardinfo(cardData);
    // console.log(cardData);
  };

  const handlePay = async (e) => {
    e.preventDefault();
    const addPaymentInfo = await ordersAPI.checkout(cardinfo);
    navigate("/users/myAccount");
  };

  return (
    <div>
      <form onSubmit={async (e) => handlePay(e)}>
        <div>
          <label>Class Name</label>
          <input
            className=""
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <label>Class Description</label>
          <textarea name="description" onChange={handleChange} required />

          <label>Class Price</label>

          <input
            className=""
            type="number"
            name="expDate"
            onChange={handleChange}
            required
          />
          <label>Photo</label>
          <input
            className=""
            type="file"
            name="photo"
            onChange={handleChange}
            required
          />

          <button className="" type="submit">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
}
