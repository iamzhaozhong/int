import { Link } from "react-router-dom";
//works
export default function ProductLink(props) {
	return (
		<div>
			{props.products.map((item) => (
				<>
					<Link key={item.id} to={`/products/${item.id}`}>
						{item.fields.name}
					</Link>
				</>
			))}
		</div>
	);
}