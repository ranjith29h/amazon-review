import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.sellerapp.com/img/sellerapp-amazon-logo.svg"
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="Seller app logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
