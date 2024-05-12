import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CategoryCard } from "./CategoryCard";

export function CategoryCardList(props) {
  const cardList = props.props;

  return (
    <Container>
      <Row>
        {cardList.map((cat) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={cat.id}>
              <CategoryCard
                id={cat.id}
                title={cat.title}
                thumbnail={cat.thumbnail}
                category={cat.escription}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
