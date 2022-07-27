import { useEffect, useState } from "react";
import * as productsAPI from "../../utilities/products-api";
import ProductCard from "../../components/ProductCard/ProductCard";
import AddClass from "../../components/AddClass/AddClass";

export default function HomePage({ user }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const List = async () => {
      const products = await productsAPI.getAll();

      setProductList(products);
      console.log(products);
    };
    List();
  }, []);

  return (
    <div>
      <h1>Current Classes</h1>
      {productList.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
      {user.admin ? <button>Add Class</button> : <></>}
    </div>
  );
}
