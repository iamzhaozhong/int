//set up the airtable
const Airtable = require('airtable');
const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_INVENTORY);

//useState


//reduce the size of the entire record
const sortedRecord = (records) => {
	return (records.map(record => sortRecord(record)))
}

//reduce the size of individual record
const sortRecord = (record) => {
	return {
	id: record.id,
	fields: record.fields
	}
}

//make the actual request
export default async (req,res) => {
	try {
		const tableRecords = await table.select({}).firstPage();
		const reducedRecords = sortedRecord(tableRecords);
		res.statusCode = 200
		setRecords(res.json(reducedRecords));
	} catch (err) {
		console.log(err);
	}
};

export { table, sortRecord, sortedRecord }