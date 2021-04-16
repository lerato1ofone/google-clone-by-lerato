import { PhotographIcon, SearchIcon } from "@heroicons/react/outline"
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PlayIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router";
import { HeaderOption } from "./HeaderOption"

function HeaderOptions() {

    const router = useRouter();

    const search = (e, searchType) => {

        const term = router.query.term;

        e.preventDefault();
        if(!searchType) return;

        router.push(`/search?term=${term}&searchType=${searchType}`);
    }

    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base 
        lg:justify-start lg:space-x-36 lg:pl-40 md:justify-start md:pl-40 border-b">
        {/* Left Side */}
            <div className="flex space-x-6">
                <button onClick={(e) => search(e, 'web')}><HeaderOption Icon={SearchIcon} title="All" selected/></button>
                <button onClick={(e) => search(e, 'image')}><HeaderOption Icon={PhotographIcon} title="Images"/></button>
                <HeaderOption Icon={PlayIcon} title="Videos"/>
                <HeaderOption Icon={NewspaperIcon} title="News"/>
                <HeaderOption Icon={MapIcon} title="Maps"/>
                <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>

            {/* Right Side */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
