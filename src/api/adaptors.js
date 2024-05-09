// aici vom prelucra datele primite de la APi si vom afisa doar elementele care ne intereseaza

export function getAdaptedMeal(apiResponse) {
  // console.log (apiResponse)
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
