// API key = "1" -> https://www.themealdb.com/api.php

// definesc functia care returneaza endpoint-ul

export function searchRecipesEndpoint(query) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const url = apiUrl + query;
  return apiUrl;
}

// export function getIngredientsListEndpoint(query) {
//   const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
//   const url = apiUrl + query;
//   return url;
// }

export function randomMealEndpoint() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  return apiUrl;
}

export function getAdaptedMealByIdEndpoint(id) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return apiUrl;
}

export function getCategoryListEndpoint() {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  return apiUrl;
}

export function getMealsByCategoryEndpoint (query){
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
  return apiUrl;

}