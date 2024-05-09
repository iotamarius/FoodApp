import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import "./Page404.css";
import { Container } from "react-bootstrap";

export function Page404() {
  return (
    <div className="Page404">
      <Layout>
        <Container className="error404 d-flex flex-column justify-content-center align-items-center">
          <strong>Page404!</strong>
          <p>Page not found! Pelase go back :) </p>
          <Link to="/">Home</Link>
        </Container>
      </Layout>
    </div>
  );
}
