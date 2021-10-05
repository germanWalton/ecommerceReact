import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Image } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <>
      <header>
        <Container>
          <NavBar />
        </Container>
      </header>

      <Container className="main-container">
        <Image
          src="https://bsstatic2.mrjack.es/wp-content/uploads/2015/10/pan-fresas-chile-cabecera.jpg"
          className="w-100 mt-5"
        ></Image>
        <ItemListContainer greeting="Panes y Bollería" />
      </Container>
    </>
  );
}

export default App;
