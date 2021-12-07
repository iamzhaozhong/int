import { Link } from "react-router-dom";

export default function ProductLink({ products }) {
	return (
		<div>
			{products.map((item) => (
				<Link key={item.id} to={`/item/${item.id}`}>
					{item.fields.Name}
				</Link>
			))}
		</div>
	);
}