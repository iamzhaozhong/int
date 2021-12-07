import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/new">Suggest A New Product!</Link>
		</div>
	);
}