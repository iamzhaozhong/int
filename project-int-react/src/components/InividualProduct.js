import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { deleteProduct } from './Airtable';

export default function IndividualProduct(props) {
	const [product, setProduct] = useState({});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const foundProduct = props.products.find((product) => {
			return product.id === params.id;
		});
		setProduct(foundProduct);
	}, [params.id, props.products]);

	const handleDelete = async () => {
		const res = await deleteProduct(params.id);
		props.setToggle(prevToggle => !prevToggle);
		if (res) {
			navigate("/")
		}
	}

	return (
		<div>
			{product && product.fields ?
				<div className="items">
					<h2>{product.fields.name}</h2>
					<h4 className="description">{product.fields.description}</h4>
					<p className="price">{product.fields.price}</p>
					<Link to={`/edit/${product.id}`}>EDIT</Link>
					<br />
					<button onClick={handleDelete}>DELETE</button>
				</div>
				:
				<h1>Loading ...</h1>}
		</div>
	);
}