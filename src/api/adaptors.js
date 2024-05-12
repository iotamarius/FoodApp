// aici vom prelucra datele primite de la APi si vom afisa doar elementele care ne intereseaza

export function getAdaptedMeal(apiResponse) {

  if (!apiResponse) {
    return [];
  }
  const rawRealList = apiResponse;
  const adaptedMealList = rawRealList.map((meal) => {
    return {
      id: meal.idMeal,
      thumbnail: meal.strMealThumb,
      title: meal.strMeal,
      category: meal.strCategory,
      instructions: meal.strInstructions,
      country: meal.strArea,
      ingredients1: meal.strIngredient1,
      ingredients2: meal.strIngredient2,
      ingredients3: meal.strIngredient3,
      ingredients4: meal.strIngredient4,
      ingredients5: meal.strIngredient5,
      ingredients6: meal.strIngredient6,
      ingredients7: meal.strIngredient7,
      ingredients8: meal.strIngredient8,
      ingredients9: meal.strIngredient9,
      ingredients10: meal.strIngredient10,
      ingredients11: meal.strIngredient11,
      ingredients12: meal.strIngredient12,
      ingredients13: meal.strIngredient13,
      ingredients14: meal.strIngredient14,
      ingredients15: meal.strIngredient15,
      ingredients16: meal.strIngredient16,
      ingredients17: meal.strIngredient17,
      ingredients18: meal.strIngredient18,
      ingredients19: meal.strIngredient19,
      ingredients20: meal.strIngredient20,
      measure1: meal.strMeasure1,
      measure2: meal.strMeasure2,
      measure3: meal.strMeasure3,
      measure4: meal.strMeasure4,
      measure5: meal.strMeasure5,
      measure6: meal.strMeasure6,
      measure7: meal.strMeasure7,
      measure8: meal.strMeasure8,
      measure9: meal.strMeasure9,
      measure10: meal.strMeasure10,
      measure11: meal.strMeasure11,
      measure12: meal.strMeasure12,
      measure13: meal.strMeasure13,
      measure14: meal.strMeasure14,
      measure15: meal.strMeasure15,
      measure16: meal.strMeasure16,
      measure17: meal.strMeasure17,
      measure18: meal.strMeasure18,
      measure19: meal.strMeasure19,
      measure20: meal.strMeasure20,
    };
  });
  return adaptedMealList;
}

export function getAdaptedCategoryList(apiResponse) {
  if (!apiResponse || !apiResponse.categories) {
    return [];
  };
  const rawResult = apiResponse.categories;
  const adaptedCategories = rawResult.map((category) => {
    return {
      id: category.idCategory,
      title: category.strCategory,
      thumbnail: category.strCategoryThumb,
      description: category.strCategoryDescription,
    };
  });

  return adaptedCategories;
}
