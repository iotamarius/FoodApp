import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export function MealCard(props) {
  return props.props.map((meal) => {
    let mealId = meal.id;
    
    return (
      <Card
        key={mealId}
        className="meal-card d-flex flex-column align-items-center justify-content-between h-100 mt-2"
      >
        <Link to={`/meal/${encodeURIComponent(mealId)}`}>
          <Card.Img src={meal.thumbnail} variant="top" />
          <Card.Body>
            <Card.Title>{meal.title}</Card.Title>
            <Card.Text>Category: {meal.category}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  });
}
