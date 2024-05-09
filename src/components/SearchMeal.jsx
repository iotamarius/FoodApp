import { Button, Col, Container, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { searchRecipesEndpoint } from "../api/endpoints";
import { useFetch } from "../util/hooks/useFetch";
import { getAdaptedMeal } from "../api/adaptors";
import { MealCard } from "./MealCard";
import { useState } from "react";

export function SearchMeal() {
  const [query, setQuery] = useState("");

  const searchRecepiesEndpoint = searchRecipesEndpoint(query);
  let searchData = useFetch(searchRecepiesEndpoint);
  const adaptedSearchMeal = getAdaptedMeal(searchData);

  return (
    <Container className="mt-2 mb-2">
      <Form>
        <h2>What do you whant to eat? :)</h2>
        <Form.Group controlId="meal-search">
          <Form.Control
            placeholder="Search for a meal"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      {query ? (
          
          <MealCard props={adaptedSearchMeal} />
      ) : (
        <></>
      )}
    </Container>
  );
}
