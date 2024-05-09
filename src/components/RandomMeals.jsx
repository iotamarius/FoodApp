import { getAdaptedMeal } from "../api/adaptors";
import { randomMealEndpoint } from "../api/endpoints";
import { useFetch } from "../util/hooks/useFetch";
import { MealCard } from "./MealCard";

export function RandomMeals (){
    const getRandomMealEndpointApi = randomMealEndpoint();
    const getRandomMealData = useFetch(getRandomMealEndpointApi);
    const adaptedRandomMeal = getAdaptedMeal(getRandomMealData);

    return (
        <MealCard props={adaptedRandomMeal} key='22222222'/>
    )
}