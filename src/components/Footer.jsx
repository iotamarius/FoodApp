import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Footer() {
  return (
      <footer >
        <Container className="d-flex  justify-content-center pt-2">
        <p className="p-2"> Made by <strong>Marius Iota</strong>  for IT School România © 2024. All rights reserved.</p>
        <Link className="p-2" to="/about"> About</Link>
        </Container>
      </footer>

  );
}
