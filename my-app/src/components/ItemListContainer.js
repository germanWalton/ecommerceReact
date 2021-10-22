import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { category: productCategory } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const { docs } = await getFirestore().collection("serverData").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));

      if (productCategory) {
        const filterCategory = newArray.filter(
          (item) => item.category === productCategory
        );
        setProduct(filterCategory);
      } else {
        setProduct(newArray);
      }
    };
    getProducts();
  }, [productCategory]);

  return (
    <>
      {
        <div className="text-white text-center mt-5 d-flex justify-content-center row">
          <ItemList items={product} />
        </div>
      }
    </>
  );
}

export default ItemListContainer;
