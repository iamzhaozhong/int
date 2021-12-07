import { Link } from "react-router-dom";
//works
export default function ProductLink({ products }) {
	return (
		<div>
			{products.map((item) => (
				<>
					<Link key={item.id} to={`/item/${item.id}`}>
						{item.fields.Name}
					</Link>
					<h1>ProductLinks work</h1>
				</>

			))}
		</div>
	);
}