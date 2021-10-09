import React from "react";
import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = (item) => {
  const { title, imageUrl, description, price, stock } = item.item;

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }} className="text-center me-4 mt-3">
        <Card.Img variant="top" className="mt-3" src={imageUrl} />
        <Card.Body className="text-dark">
          <Card.Title>
            <h4>{title}</h4>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>${price}</h5>
          <ItemCount stock={stock} initial={0} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
