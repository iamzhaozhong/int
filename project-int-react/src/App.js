import "./App.css";
import { getProduct } from "./components/Airtable";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from 'react-router';
import Navigation from './components/Navigation';
import IndividualProduct from './components/InividualProduct';
import ProductLink from './components/ProductLink';
import SuggestProduct from "./components/SuggestProduct";
import HeroSection from './pages/HeroSection';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const getAllProducts = async () => {
			const response = await getProduct();
			setAllProducts(response);
		};
		getAllProducts();
	}, [toggle]);

	return (
		<div className='App'>
			<Navigation />
			<HeroSection />
			<Routes>
				<Route
					path='/'
					element={<ProductLink products={allProducts} />}
				/>
				<Route
					path='/new'
					element={<SuggestProduct setToggle={setToggle} />}
				/>
				<Route
					path='/edit/:id'
					element={
						<SuggestProduct
							products={allProducts}
							setToggle={setToggle}
						/>
					}
				/>
				<Route
					path='/products/:id'
					element={
						<IndividualProduct
							products={allProducts}
							setToggle={setToggle}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;