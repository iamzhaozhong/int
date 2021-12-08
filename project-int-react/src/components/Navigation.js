import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<>
			<Link to="/">Home</Link>
			<br />
			<Link to="/new">Suggest A New Product!</Link>
		</>
	);
}