import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { title: itemTitle } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { docs } = await getFirestore().collection("serverData").get();
        const newArray = docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        const findProduct = newArray.find((item) => item.title === itemTitle);
        setProduct(findProduct);
      } catch (e) {
        console.log(e);
      }
    };

    getDetail();
  }, [itemTitle]);

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
