import { useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";
import { put } from "axios";
import { getToken } from "../../utilities/users-service";
import "./EditClass.css";
import "react-toastify/dist/ReactToastify.css";

export default function EditClass({
  product,
  productList,
  setProductList,
  closeModal,
}) {
  const [editedClass, setEditedClass] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    photo: product.photo,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let updatedClass = { ...editedClass };

    if (e.target.files) {
      updatedClass[e.target.name] = e.target.files[0];
    } else {
      updatedClass[e.target.name] = e.target.value;
    }

    setEditedClass(updatedClass);
    console.log("edited class", updatedClass);
  };

  //   update class
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photo, description, price } = editedClass;
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
    const addedClass = await put(
      `/api/products/editClass/${product._id}`,
      formData,
      config
    );
    console.log("added class", addedClass);
    toast.success("Add Success");
    navigate(0);
  };

  //   delete class
  const handleDelete = async () => {
    const deletedClass = await productsAPI.deleteClass(product._id);
    console.log("deleted class", deletedClass);
    let restProducts = productList.filter((product) => {
      if (deletedClass.id !== product.id) {
        return true;
      }
    });
    setProductList(restProducts);
    closeModal();
  };

  return (
    <div>
      <div className="modalContainer">
        <label>Class Name</label>
        <input
          className=""
          type="text"
          name="name"
          value={editedClass.name}
          onChange={handleChange}
          required
        />
        <label>Class Description</label>
        <textarea
          name="description"
          value={editedClass.description}
          onChange={handleChange}
          required
        />

        <label>Class Price</label>

        <input
          className=""
          value={editedClass.price}
          type="number"
          name="price"
          onChange={handleChange}
          required
        />
        <label>Photo</label>
        <input
          className="fileBorder"
          type="file"
          name="photo"
          onChange={handleChange}
          required
        />
        <div className="flexRow">
          <button onClick={handleSubmit} className="btn btn-primary">
            Update Class
          </button>
          <button onClick={handleDelete} class="btn btn-danger">
            Delete Class
          </button>
        </div>
      </div>
    </div>
  );
}
