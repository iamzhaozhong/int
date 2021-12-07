import { table, sortedRecord } from "./utility/Airtable";
import { useState } from 'react';

const [records, setRecords] = useState(null);

export default async (req, res) => {
	try {
		const records = await table.select({}).firstPage();
		const prodcutRecords = sortedRecord(records);
		res.statusCode = 200;
		setRecords(res.json(prodcutRecords));
	} catch (err) {
		res.statusCode = 500;
		res.json({ msg: 'Something went wrong' });
	}
};
