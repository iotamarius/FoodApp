import React from 'react';
import { Layout } from '../components/Layout';
import { Container } from 'react-bootstrap';
import "./About.css"

export function About() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <Container className='about'>
          
          <h1 className="color">About</h1>
          <p><a href='./'><strong>EatBread!</strong></a> is a Web Aplication that was build in 2024 as the final project for graduating the WebDevelopment course from ItSchool. </p>
          <p>This app was build using React <img className='about-logo' src='./img/react.png'/> and acceses data from <a href='https://www.themealdb.com' target='_blank'> <strong>themealdb.com</strong> </a>`s API which is a free database with over 300 meals.</p>
          <p>The source code is posted on my GitHub <a href='https://github.com/iotamarius/FoodApp' target='_blank'><img className='about-logo' src='./img/github.png'/> </a> </p>
        </Container>
        
      </Layout>
    </>
  );
}
