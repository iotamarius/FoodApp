import React from "react";


export function MealsByCategoryComponent (){
    const { title } = useParams();
    

    return(
        <>
        <MealsByCategory props={title}></MealsByCategory>
        </>
    );
}