import { toast } from "react-toastify";
import { useState } from "react";
import * as productsAPI from "../../utilities/products-api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function AddClass() {
  const [newClass, setNewClass] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const product = {
      ...newClass,
      [e.target.name]: e.target.value,
    };

    setNewClass(product);
    console.log(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedClass = await productsAPI.addClass(newClass);
    console.log("added class", addedClass);
    toast.success("Add Success");
    navigate(0);
  };

  return (
    <div>
      <form onSubmit={async (e) => handleSubmit(e)}>
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
            name="price"
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
