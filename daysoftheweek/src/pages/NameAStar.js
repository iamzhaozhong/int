import { useState } from 'react';
import { postDays } from '../airtable/Airtable';

export default function NameAStar() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [coordinate, setCoordinate] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newStar = {
			name,
			description,
			coordinate,
		};
		await postDays(newStar);
	};

	return (
		<div>
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
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input
					type="text"
					value={coordinate}
					name="coordinate"
					onChange={(e) => setCoordinate(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
