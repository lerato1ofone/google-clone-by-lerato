import PaginationButtons from "./PaginationButtons"

function SearchResults({ results }) {
    console.log(results);
    return (
        <div className="mx-auto w-full px-6 sm:pl-[9%] md:pl-[16%] lg:pl-40">
            <p className="text-gray-600 text-md mt-3 mb-5">
                About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results.items?.map(result => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sml">{result.formattedUrl}</a>
                        <a href={result.link} className="text-sml">
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
            
            <PaginationButtons />
        </div>
    )
}

export default SearchResults