import React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';
import { MealDetails } from './pages/MealDetails';
import { MealCategory } from './pages/MealCategory';
import { MealsByCategory } from './pages/MealsByCategory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },{
    path: '/about',
    element: <About />,
  },{
    path: '/categories',
    element: <MealCategory />
  },{
    path: '/categories/:categoryId',
    element: <MealsByCategory />
  },{
    path: '/meal/:mealId',
    element: <MealDetails /> 
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
