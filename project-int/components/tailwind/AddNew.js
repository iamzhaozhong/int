import { useState } from 'react';
import { suggestItem } from "../../pages/api/utility/Airtable";

export default function AddNew () {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newItem = {
			name,
			description,
			price,
			image
		};

		await suggestItem(newItem);
	};
	return (
		<>
			<form onSumbmit={handleSubmit}
			<input type='text'/>
		</>
	)


			//need confirmation screen here

	}
}