import Head from 'next/head';
//import styles as needed for the Layout/children layout.
export default function Layout ({title, description, children}) {
	return(
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>
			<div>
				{/*we could add style in the 'className = {styles.container}'*/}
				{/*in the styles, we create 'Layout.module.css'*/}
				{children}
			</div>

		</div>
	)
}

Layout.defaultProps = {
	title: 'PROJECT INT.',
	description: 'A new way to learn about numbers, in JP!'
}