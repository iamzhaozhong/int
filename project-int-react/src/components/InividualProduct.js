import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
	const [product, setProduct] = useState({});
	const params = useParams();

	useEffect(() => {
		const foundProduct = products.find((item) => {
			return item.id === params.id;
		});
		setProduct(foundProduct);
	}, [params.id, products]);

	return (
		<div>
			<h1>{product?.fields?.Name}</h1>
			<h4>{product?.fields?.Description}</h4>
			<p>{product?.fields?.Price}</p>
		</div>
	);
}