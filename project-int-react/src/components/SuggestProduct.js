import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { postProduct, editProduct } from "./Airtable";

export default function SuggestProduct(props) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (props.products) {
			const foundProduct = props.products.find(product => {
				return product.id === params.id
			})
			if (foundProduct) {
				setName(foundProduct.fields.name)
				setDescription(foundProduct.fields.description)
				setPrice(foundProduct.fields.price)
			}
		}
	}, [params.id, props.products])

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newProduct = {
			name,
			description,
			price
		};
		if (props.products) {
			const res = await editProduct(newProduct, params.id)
			props.setToggle(prevToggle => !prevToggle);
			if (res) {
				navigate(`/products/${params.id}`);
			}
		} else {
			const res = await postProduct(newProduct);
			props.setToggle(prevToggle => !prevToggle)
			if ( res ) {
				navigate("/");
			}
		}

	};

	return (
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					name="name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					value={description}
					name="description"
					onChange={(e) =>setDescription(e.target.value)}
				/>
				<input
					type="text"
					value={price}
					name="price"
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button>Suggest this product!</button>
			</form>
	);
}