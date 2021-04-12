import Head from 'next/head';
import Header from '../components/Header';

function Search() {
    return (
        <div>
            <Head>
                <title>Search results</title>
                <link rel="icon" href="/Google-Chrome-Google-Chrome.ico" />
            </Head>

            {/* Header */}
            <Header />

        </div>
    )
}

export default Search
