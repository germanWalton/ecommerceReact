import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { CartContextUse } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { clear, removeItem, cart, totalPrice, addQuantity, reduceQuantity } =
    CartContextUse();

  return (
    <Container>
      <div className="d-flex align-items-center flex-column">
        <h3 className="text-center mt-5">Carrito de compras</h3>
        {cart.map((element) => {
          return (
            <>
              <ListGroup horizontal className="mt-3">
                <ListGroup.Item>
                  <img
                    src={element.item.imageUrl}
                    alt="imagen"
                    className="w-25"
                  ></img>
                </ListGroup.Item>
                <ListGroup.Item>{element.item.title}</ListGroup.Item>
                <ListGroup.Item>${element.item.price}</ListGroup.Item>
                <ListGroup.Item>{element.item.description}</ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-flex">
                    <Button
                      variant="secondary"
                      onClick={() => reduceQuantity(element)}
                    >
                      -
                    </Button>

                    <input
                      className="text-center"
                      type="text"
                      value={element.quantity}
                    ></input>
                    <Button
                      variant="secondary"
                      onClick={() => addQuantity(element)}
                    >
                      +
                    </Button>
                  </div>
                </ListGroup.Item>
                <Button
                  variant="secondary"
                  onClick={() => removeItem(element.item.id)}
                >
                  Quitar producto
                </Button>
              </ListGroup>
            </>
          );
        })}

        {cart.length > 0 ? (
          <>
            {" "}
            <h5 className="mt-5 align-self-end text-center">
              Total a pagar: ${totalPrice}
            </h5>
            <Link
              to="/cart/checkout"
              className="btn btn-outline-secondary mt-5 align-self-end"
            >
              Finalizar compra
            </Link>
            <Button onClick={clear} className="w-25 mt-5" variant="secondary">
              Vaciar carrito
            </Button>{" "}
          </>
        ) : (
          <h5>El carrito esta vacio </h5>
        )}
        <Link to="/" className="btn btn-dark mt-3 w-25">
          Seguir comprando
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
