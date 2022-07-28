import { useEffect, useState } from "react";
import * as productsAPI from "../../utilities/products-api";
import ProductCard from "../../components/ProductCard/ProductCard";
import Modal from "react-modal";
import AddClass from "../../components/AddClass/AddClass";
import { AiOutlinePlusSquare } from "react-icons/ai";
import "./HomePage.css";

export default function HomePage({ user }) {
  const [productList, setProductList] = useState([]);

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
  Modal.setAppElement("#root");

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

  useEffect(() => {
    const List = async () => {
      const products = await productsAPI.getAll();

      setProductList(products);
      console.log(products);
    };
    List();
  }, []);

  return (
    <div className="product">
      <div className="eachProductOuter">
        <h1>Current Classes</h1>
        <AiOutlinePlusSquare
          onClick={openModal}
          size={"2.5rem"}
          style={{ cursor: "pointer", margin: "0.5rem", color: "purple" }}
        />
      </div>
      <div className="row-display">
        {productList.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Class</h2>
        <AddClass />
      </Modal>
    </div>
  );
}
