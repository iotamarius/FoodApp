import React from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

export function CatCard(props) {
  const { id, title, thumbnail} = props;

  return (
    <>
      <Card
        key={id}
        className="category-card d-flex flex-column align-items-center justify-content-between h-100 mt-2"
      >
        <Link to={`/categories/${encodeURIComponent(title)}`}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* TODO add a link to every category */}
            <Card.Img src={thumbnail} variant="top" />
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}
