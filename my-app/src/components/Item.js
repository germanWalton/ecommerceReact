import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item(item) {
  const {  title, stock, imageUrl } = item.item;

  return (
    <Card style={{ width: "18rem" }} className="text-center me-4 mt-3">
      <Card.Img variant="top" className="mt-3" src={imageUrl} />
      <Card.Body className="text-dark">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <Badge className="bg-dark">Stock: {stock}</Badge>
        </Card.Text>
        <Link className="btn btn-secondary" to={`/item/${title}`}>
          Ver detalle
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
