import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import serverData from "./data/serverData.json";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { category: productCategory } = useParams();

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        if ( productCategory) {
          const filterCategory = serverData.filter(
            (item) => item.category ===  productCategory
          );
          resolve(filterCategory);
        } else {
          resolve(serverData);
        }

        reject("Hubo un error en la comunicación");
      }, 2000);
    });

    data.then((response) => {
      setProduct(response);
    });
  }, [ productCategory]);

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
