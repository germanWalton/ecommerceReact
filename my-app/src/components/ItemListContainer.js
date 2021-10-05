import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import serverData from "./data/serverData.json";

function ItemListContainer() {
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(serverData);
        reject("Hubo un error en la comunicación");
      }, 2000);
    });

    data.then((response) => {
      setProduct(response);
    });
  }, []);

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
