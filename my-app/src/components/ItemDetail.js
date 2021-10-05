import React from "react";
import { Modal, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";


const ItemDetail = (item) => {
  const { title, price, description, stock, imageUrl } = item.item;
 

 
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title> {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="text-center me-4 mt-3">
          <Card.Img variant="top" className="mt-3" src={imageUrl} />
          <Card.Body className="text-dark">
            <Card.Text>{description}</Card.Text>
            <Card.Title><h4>${price}</h4></Card.Title>
            <ItemCount stock={stock} initial={0} />
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default ItemDetail;
