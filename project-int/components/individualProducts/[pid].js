import {useRouter} from 'next/router';
import {useEffect} from 'react';


export default function Product () {
	const router = useRouter()
	const {pid} = router.query


	return (
		<>
			<p>
				Item goes here
			</p>
		</>
	)
}