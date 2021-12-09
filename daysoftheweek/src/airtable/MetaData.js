import axios from 'axios';
import { getDays } from './Airtable';
import { useState, useEffect } from 'react';

function MetaData () {
	const [days, setDays] = useState({});

	useEffect(() => {
		const getAll = async () => {
			const response = await getDays();
			setDays(response);
		};
		getAll();
	}, []);
	return days;
};

export { MetaData };

