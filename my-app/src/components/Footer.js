import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container className="pt-5">
      <footer className=" navbar-fixed-bottom mt-5 p-3 my-4 border-top">
        <div>
          <span className="text-muted mr-3">&copy; 2021 Walton Bakery</span>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
