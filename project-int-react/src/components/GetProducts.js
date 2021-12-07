import { useState } from "react";
import { table,sortedRecord } from './Airtable';

async function GetProducts (res) {
	const [products,setProducts] = useState(null);
	try {
		const tableRecords = await table.select({}).firstPage();
		const reducedRecords = sortedRecord(tableRecords);
		res.statusCode = 200;
		setProducts(res.json(reducedRecords));
		console.log(products);
		RenderProducts(products);
	} catch (err) {
		console.log(err);
	}
}

function RenderProducts(arr) {
	return (
		arr.map((product) => {
			return(
				<h1>
					{product.Name}
				</h1>
			)
		}
	))
};

export { GetProducts };