import React from "react";
import { Layout } from "../components/Layout";
import { RandomMealsList } from "../components/RandomMealsList";
import { SearchMeal } from "../components/SearchMeal";

export function Home() {
  return (
    <>
      {/* Instantiem Layout, dându-i copii. */}
      <Layout>
        <SearchMeal />
        <RandomMealsList numberOfCards={6} />
      </Layout>
    </>
  );
}
