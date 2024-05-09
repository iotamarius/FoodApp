import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MealCard } from "./MealCard";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MealCardList(props) {
  console.log(props.props);
  const mealList = props.props;

  return (
    <Container>
      <Row>
        {mealList.map((meal) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={meal.id}>
              <Card
                key={meal.id}
                className="meal-card d-flex flex-column align-items-center justify-content-between h-100 mt-2"
              >
                <Link to={`/meal/${encodeURIComponent(meal.id)}`}>
                  <Card.Img src={meal.thumbnail} variant="top" />
                  <Card.Body>
                    <Card.Title>{meal.title}</Card.Title>

                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

// const cardList = props.props;

// return (
//   <Container>
//     <Row>
//       {cardList.map((cat) => {
//         return (
//           <Col xs={12} md={6} lg={4} className="mb-4" key={cat.id}>
//             <CatCard
//               id={cat.id}
//               title={cat.title}
//               thumbnail={cat.thumbnail}
//               category={cat.escription}
//             />
//           </Col>
//         );
//       })}
//     </Row>
//   </Container>

{
  /* <Row>
{props.map((meal) => {
  <Col>
    <MealCard
      id={meal.id}
      thumbnail={meal.thumbnail}
      title={meal.title}
      category={meal.category}
    />
  </Col>;
})}
</Row> */
}
