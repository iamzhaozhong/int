import "./App.css";
import { getProduct } from "./components/Airtable";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import Product from './components/InividualProduct';
import ProductLink from './components/ProductLink';
import SuggestProduct from "./components/SuggestProduct";

function App() {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            const response = await getProduct();
            setAllProducts(response);
        };
        getAllProducts();
    }, []);

    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<ProductLink products={allProducts} />} />
                <Route path="/new" element={<SuggestProduct />} />
                <Route path="/items/:id" element={<Product item={allProducts} />} />
            </Routes>
        </div>
    );
}

export default App;