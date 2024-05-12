import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props) {
  return (
    <div className="Layout">
      <Header />
      {/* Afisam pe ecran copiii pe care Layout ii primeste la instantiere. */}
      <main className="container">{props.children}</main>
      <Footer />
    </div>
  );
}
