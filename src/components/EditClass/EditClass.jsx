import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";
import "./EditClass.css";

export default function EditClass({ product }) {
  const [editedClass, setEditedClass] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    photo: product.photo,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const editedProduct = {
      ...editedClass,
      [e.target.name]: e.target.value,
    };

    setEditedClass(editedProduct);
    console.log("edited class", editedProduct);
  };

  //   update class
  const handleSubmit = async () => {
    const updatedClass = await productsAPI.editClass(editedClass, product._id);
    console.log("updated class", updatedClass);

    navigate(0);
  };

  //   delete class
  const handleDelete = async () => {
    const deletedClass = await productsAPI.deleteClass(product._id);
    console.log("deleted class", deletedClass);
    navigate(0);
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
          className=""
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
