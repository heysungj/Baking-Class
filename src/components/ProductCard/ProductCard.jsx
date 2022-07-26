import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Modal from "react-modal";
import EditClass from "../EditClass/EditClass";

// import { useEffect, useState } from "react";

export default function ProductCard({
  product,
  productList,
  setProductList,
  user,
}) {
  // use navigate
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#003580";
  }

  function closeModal() {
    setIsOpen(false);
  }

  ///////////////////////////////////////////

  return (
    <div className="eachProductContainer">
      <div className="eachProduct">
        <label className="className">{product.name}</label>
        {user.admin ? (
          <AiOutlineEdit
            onClick={openModal}
            size={"2rem"}
            style={{ cursor: "pointer", margin: "0.5rem", color: "purple" }}
          />
        ) : null}
      </div>
      <img className="productImg" src={product.photo} alt="" />

      <button
        className="btn btn-secondary"
        onClick={() => {
          navigate(`/${product.id}`, {
            state: {
              product,
            },
          });
        }}
      >
        Check Details
      </button>

      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Class</h2>
        <EditClass
          product={product}
          productList={productList}
          setProductList={setProductList}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
