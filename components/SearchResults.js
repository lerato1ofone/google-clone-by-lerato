import { useRouter } from "next/router"
import PaginationButtons from "./PaginationButtons"

function SearchResults({ results }) {
    const router = useRouter();

    const getDomain = (url) => {
        const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        var domain = matches && matches[1];
        return domain;
    }

    return (
        <div className="mx-auto w-full px-6 sm:pl-[9%] md:pl-[16%] lg:pl-40">
            {router.query?.searchType != 'image' ?  
                <div>
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
                </div>
                : 
                <div className="grid grid-cols-2 gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {results.items?.map(result => (
                        
                        <div key={result.link} className="flex flex-col flex-wrap justify-items-center max-w-sm">
                            <div className="max-w-[240px] mb-5 flex-wrap">
                                <img
                                    loading="lazy"
                                    src={result.link}
                                    height="220"
                                    width="240"
                                    className="cursor-pointer"
                                />
                                <div className="group">
                                <a href={result.link} className="link text-sml line-clamp-2 group-hover:underline">
                                   {result.title}
                                </a>
                                <p className="group-hover:underline">{getDomain(result.link)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                        
            }

            <PaginationButtons />
        </div>
    )
}

export default SearchResults