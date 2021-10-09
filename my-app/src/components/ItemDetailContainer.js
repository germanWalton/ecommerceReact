import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import serverData from "./data/serverData.json";

const ItemDetailContainer = () => {

  
  const [product, setProduct] = useState([]);
  const { title: itemTitle } = useParams();

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        const findProduct = serverData.find(
          (item) => item.title === itemTitle
        );
        resolve(findProduct);

        reject("Hubo un error en la comunicación");
      }, 2000);
    });

    data.then((response) => {
      setProduct(response);
    });
  }, [itemTitle]);

  return (
    

        <ItemDetail item={product} />
  
  );
};

export default ItemDetailContainer;
