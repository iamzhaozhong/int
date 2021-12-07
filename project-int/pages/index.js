import Head from 'next/head';
import Navigation from './components/Navigation';
import { table, sortedRecord } from "./api/utility/Airtable";

//import layout
import Link from 'next/link';

export default function Home({ initialProducts }) {

    return (
        <div className="max-w-xl m-auto p-2">
            <Head>
                <title>My Todo CRUD App</title>
            </Head>

            <main>
                <Navigation />
                <>
                    <ul>
                        {initialProducts &&
                            initialProducts.map((prodcut) => (
                                <Products product={prodcut} key={prodcut.id} />
                            ))}
                    </ul>
                </>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    let products = await table
        .select({ })
        .firstPage();
    return {
        props: {
            initialProducts: sortedRecord(products),
        },
    };
}
