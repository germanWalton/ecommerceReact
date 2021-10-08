import React from "react";
import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";

function Item(item) {
  const {id,  title, stock, imageUrl } = item.item;

  return (
   
      <Card style={{ width: "18rem" }} className="text-center me-4 mt-3">
        <Card.Img variant="top" className="mt-3" src={imageUrl} />
        <Card.Body className="text-dark">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <Badge className="bg-dark">Stock: {stock}</Badge>
          </Card.Text>
          <ItemDetailContainer item={item.item} />
        </Card.Body>
      </Card>
   
  );
}

export default Item;
