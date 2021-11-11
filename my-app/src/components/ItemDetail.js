import React from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContextUse } from "../context/CartContext";

const ItemDetail = (item) => {
  const { title, imageUrl, description, price, stock } = item.item;

  //Context Api
  const { addItem, cart } = CartContextUse();
  const onAdd = (qty) => {
    addItem(item.item, qty);
  };

  return (
    <Container className="d-flex justify-content-center"  style={{paddingTop:100}}>
      {(title, imageUrl, description, price, stock) ? (
        <Card style={{ width: "18rem" }} className="text-center me-4 mt-3">
          <Card.Img variant="top" className="mt-3 ps-3 pe-3" src={imageUrl} />
          <Card.Body className="text-dark">
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <h5>${price}</h5>
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            {cart.length > 0 ? (
              <div>
                <Link to="/cart" className="btn btn-dark m-3">
                  Ir al carrito
                </Link>
              </div>
            ) : (
              console.log("Para finalizar compra primero agregar algo")
            )}
            <Link className="btn btn-secondary" to="/">
              Volver
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </Container>
  );
};

export default ItemDetail;
