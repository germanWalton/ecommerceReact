import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import serverData from "./data/serverData.json";
import { useParams } from "react-router";

const ItemDetailContainer = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState([]);
  const{id:productId} = useParams()

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(() => {
        
          const findProduct = serverData.find(
            (item) => item.id === productId
          );
          resolve(findProduct);

        reject("Hubo un error en la comunicación");
      }, 2000);
    });

    data.then((response) => {
      setProduct(response);
    });
  }, [productId]);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Ver detalles
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ItemDetail item={item.item} />
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
