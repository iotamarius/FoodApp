import { Col, Container, Row } from "react-bootstrap";
import { RandomMeals } from "./RandomMeals";

export function RandomMealsList(numberOfCards) {
  let count = parseInt(numberOfCards.numberOfCards);
  return (
    <Container key={count}>
      <h2>Random meals:</h2>
      <Row>
        {Array.apply(null, { length: count }).map((i) => {
          return(
          <Col xs={12} md={6} lg={4} className="mb-4" key={i}>
            <RandomMeals />
          </Col>
          )
        })}
      </Row>
    </Container>
  );
}
