import { getAdaptedCategoryList } from "../api/adaptors";

import { useFetchCategory } from "../util/hooks/useFetch";
import { Layout } from '../components/Layout';
import { CategoryCardList } from "../components/CategoryCardList";
import { getCategoryListEndpoint } from "../api/endpoints";



export function MealCategory(){

  const categoryListApi = getCategoryListEndpoint();
  const rawCategoryList = useFetchCategory(categoryListApi);
  const adaptedCategoryList = getAdaptedCategoryList( rawCategoryList);
  
  return (
    <Layout>
      <CategoryCardList props={adaptedCategoryList} />
    </Layout>
  );
}