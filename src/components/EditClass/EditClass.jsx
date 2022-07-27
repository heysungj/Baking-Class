import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productsAPI from "../../utilities/products-api";

export default function EditClass({ product }) {
  const [editedClass, setEditedClass] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const product = {
      ...editedClass,
      [e.target.name]: e.target.value,
    };

    setEditedClass(product);
    console.log("edited class", product);
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
      <div>
        <label>Class Name</label>
        <input
          className=""
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <label>Class Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <label>Class Price</label>

        <input
          className=""
          value={product.price}
          type="number"
          name="price"
          onChange={handleChange}
          required
        />
        <label>Photo</label>
        <input
          className=""
          type="file"
          value={product.photo}
          name="photo"
          onChange={handleChange}
          required
        />

        <button onClick={handleSubmit}>Update Class</button>
        <button onClick={handleDelete}>Delete Class</button>
      </div>
    </div>
  );
}
