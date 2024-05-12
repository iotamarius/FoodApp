import React from "react";
import { MealsByCategoryComponent } from "../components/MealsByCategoryComponent";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import { getMealsByCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../util/hooks/useFetch";
import { getAdaptedMeal } from "../api/adaptors";
import { MealCardList } from "../components/MealCardList";

export function MealsByCategory() {
  const { categoryId } = useParams();
  const endpoint = getMealsByCategoryEndpoint(categoryId);
  const rawData = useFetch(endpoint);
  const adaptedData = getAdaptedMeal(rawData);

  return (
    <Layout>
        <h1>{categoryId}:</h1>
      <MealCardList props={adaptedData} />
    </Layout>
  );
}
