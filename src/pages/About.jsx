import React from 'react';
import { Layout } from '../components/Layout';

export function About() {
  return (
    <>
      {/* Instanțiem Layout, dandu-i copii.*/}
      <Layout>
        <h1 className="color">About</h1>
      </Layout>
    </>
  );
}
