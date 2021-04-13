import Head from 'next/head';
import Header from '../components/Header';
import {API_KEY, CONTEXT_KEY} from '../keys'
import Response from '../response'

function Search({results}) {
    console.log(results);
    return (
        <div>
            <Head>
                <title>Search results</title>
                <link rel="icon" href="/Google-Chrome-Google-Chrome.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Search results */}

        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useMockData = true;

    const data = useMockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
                        .then((response) => response.json());

    return {
        props:{
            results: data
        }
    }
}