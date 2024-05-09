import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props) {
	return (
		<div className="container">
			<Header />
			{/* Afisam pe ecran copiii pe care Layout ii primeste la instantiere. */}
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}
