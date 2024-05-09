import { Link, useParams } from "react-router-dom";
import React from 'react';
import { getAdaptedMeal } from "../api/adaptors";
import { getAdaptedMealByIdEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { useFetch } from "../util/hooks/useFetch";
import { MealCardDetails } from "../components/MealCardDetails";

export function MealDetails() {
 
    const { mealId } = useParams();
    const mealEndpoint =  getAdaptedMealByIdEndpoint(mealId);
    const meal = useFetch(mealEndpoint);
    const adaptedMeal = getAdaptedMeal(meal);
    

  return (
    <Layout>
      <MealCardDetails props={adaptedMeal} />
      <Link to="/"> Back Home</Link>
    </Layout>
  );
}
