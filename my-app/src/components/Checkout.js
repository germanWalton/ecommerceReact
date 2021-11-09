import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CartContextUse } from "../context/CartContext";
import { Redirect } from "react-router-dom";
import { getFirestore } from "../firebase";
import swal from "sweetalert";

const Checkout = () => {
  const { cart, totalPrice, setCart } = CartContextUse();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const setOrders = async (e) => {
    e.preventDefault();
    if ((!name.trim()) || (!phone.trim()) || (!email.trim())) {
      setError("Complete todos los campos");
    } 
   else {
      const order = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        items: cart.map((element) => {
          return {
            id: element.item.id,
            title: element.item.title,
            price: `$${element.item.price}`,
            quantity: element.quantity,
          };
        }),
        OrderDate: new Date(),
        total: `$${totalPrice}`,
      };
      try {
        await getFirestore()
          .collection("orders")
          .add(order)
          .then((resultado) => {
            swal(`Su numero de orden es ${resultado.id} 
         Gracias por su compra`);
            setTimeout(() => { setCart([]) },3000)
          })
        
      } catch (e) {
        console.log(e);
      }

      setPhone("");
      setName("");
      setEmail("");
      
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        <Container className="d-flex justify-content-center">
          <div className="border border-secondary col-lg-6 mt-5 p-5">
            <h5 className="text-center">
              Complete los siguientes datos para finalizar su compra
            </h5>
            <Form onSubmit={setOrders}>
              <Form.Group className="mb-3 mt-5" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  value={name}
                  type="text"
                  placeholder="Ingrese su nombre"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  value={phone}
                  type="number"
                  placeholder="Ingrese su numero de telefono"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Ingrese su dirección de correo"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Button className="w-100 mt-3" variant="secondary" type="submit">
                Enviar orden
              </Button>
            </Form>
            {error ? (
              <p className="mt-5 text-center">{error}</p>
            ) : (
              <span></span>
            )}{" "}
          </div>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Checkout;
