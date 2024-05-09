import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function MealCardDetails(props) {
  return props.props.map((meal) => {
    let mealId = meal.id;

    return (
      <Container>
        <h1>{meal.title}</h1>
        <Card key={mealId} className="meal-card  h-100 mt-2">
          <Row>
            <Col xs={12} md={4} lg={6}>
              <Card.Img src={meal.thumbnail} variant="top" />
              <Card.Body>
                
                  {/* TODO adauga un link pe categorie pentru a deschide toata categoria */}
                  <Card.Text>
                  <Link to={`/categories/${encodeURIComponent(meal.category)}`}>
                    Category: {meal.category} , Cuisine: {meal.country}
                    </Link>
                  </Card.Text>
                
              </Card.Body>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <Card.Body>
                <p>{meal.instructions}</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  });
}
