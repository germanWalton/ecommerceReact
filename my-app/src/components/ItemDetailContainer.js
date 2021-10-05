import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (item) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Ver detalles
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ItemDetail item={item.item }/>
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
