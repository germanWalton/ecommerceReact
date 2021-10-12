import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Image } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Container>
          <NavBar />
        </Container>
      </header>
      <Switch>
        <Route exact path="/">
          <Container className="main-container">
            <Image
              src="https://bsstatic2.mrjack.es/wp-content/uploads/2015/10/pan-fresas-chile-cabecera.jpg"
              className="w-100 mt-5"
            ></Image>
            <ItemListContainer />
          </Container>
        </Route>
        <Route exact path="/category/:category">
          <Container>
            <ItemListContainer />
          </Container>
        </Route>
        <Route exact path="/item/:title">
          <ItemDetailContainer />
        </Route>
        <Route>
          <Cart exact path="/cart" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
