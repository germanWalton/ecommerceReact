import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Image } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import Checkout from './components/Checkout'
// import FirebaseContextProvider from "./context/FirebaseContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <CartContextProvider>
        <Router>
          <header>
            <Container>
              <NavBar />
            </Container>
          </header>
          <Switch>
          <Route exact path="/">
            <main>
              <Container className="main-container">
                <Image
                  src="https://bsstatic2.mrjack.es/wp-content/uploads/2015/10/pan-fresas-chile-cabecera.jpg"
                  className="w-100 mt-5"
                ></Image>
                <ItemListContainer />
              </Container>
            </main>
            </Route>
            <Route exact path="/category/:category">
              <Container>
                <ItemListContainer />
              </Container>
            </Route>
            <Route exact path="/item/:title">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
          </Route>
          <Route exact path="/cart/checkout">
            <Checkout/>
          </Route>
          </Switch>
      </Router>
      <footer></footer>
      </CartContextProvider>
  );
}

export default App;
