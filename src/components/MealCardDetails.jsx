import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function MealCardDetails(props) {
  return props.props.map((meal) => {
    let mealId = meal.id;
    const arrayCount = Array(20).fill('');

    return (
      <Container>
        <h1>{meal.title}</h1>
        <Card key={mealId} className="meal-card  h-100 mt-2">
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Card.Img src={meal.thumbnail} variant="top" />
              <Card.Body>
                <Card.Text>
                  <Link to={`/categories/${encodeURIComponent(meal.category)}`}>
                    Category: {meal.category} , Cuisine: {meal.country}
                  </Link>
                </Card.Text>
              </Card.Body>
            </Col>

            <Col xs={12} md={8} lg={8}>
              <Card.Body>
                <p>{meal.instructions}</p>
              </Card.Body>
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={8} lg={6}>
              <Card.Body>
                <h4>Ingredients:</h4>
                <ul>
                  {arrayCount.map((i, index) => {
                    let count = index+1;
                    let ingredientCounter = 'ingredients' + count;
                    let measureCounter = 'measure' + count;
                    if(meal[ingredientCounter] != null && meal[ingredientCounter] != ""){
                    return (
                      <li key={index}>{meal[ingredientCounter]} : {meal[measureCounter]} </li>
                    )
                  }
                  })}
                </ul>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  });
}
