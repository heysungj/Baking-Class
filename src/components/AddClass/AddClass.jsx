import { toast } from "react-toastify";
import { useState } from "react";
import { post } from "axios";
import { getToken } from "../../utilities/users-service";
import "./AddClass.css";

export default function AddClass({ productList, closeModal }) {
  const [newClass, setNewClass] = useState();

  const handleChange = (e) => {
    if (e.target.files) {
      const product = {
        ...newClass,
        [e.target.name]: e.target.files[0],
      };

      setNewClass(product);
    } else {
      const product = {
        ...newClass,
        [e.target.name]: e.target.value,
      };

      setNewClass(product);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photo, description, price } = newClass;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    formData.append("description", description);
    formData.append("price", price);
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const addedClass = await post(`/api/products/newClass`, formData, config);
    console.log("added class", addedClass);
    toast.success("Add Success");
    productList.push(addedClass.data);
    closeModal();
  };

  return (
    <div>
      <form onSubmit={async (e) => handleSubmit(e)}>
        <div className="modalContainer">
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
            type="file"
            name="photo"
            className="fileBorder"
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" type="submit">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
}
