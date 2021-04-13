import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputReference = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputReference.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full pt-6 pr-6 pb-6 items-center">
                <Image    
                loading="lazy"
                src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
                width={120}
                height={40}
                className="cursor-pointer"
                onClick={() => router.push("/")}
                />
                <form className="flex flex-grow px-6 py-3 ml-6 border border-gray-200 rounded-full shadow-md max-w-3xl items-center">
                    <input ref={searchInputReference} className="flex-grow w-full focus:outline-none" type="text"/>
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
                        onClick={() => searchInputReference.current.value = ""} />

                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url="https://www.flaticon.com/svg/vstatic/svg/633/633779.svg?token=exp=1618256232~hmac=530e2950d457c3259d2ffc407c86f15c" className="ml-auto"/>
            </div>
                {/* Header Options */}
                <HeaderOptions />
        </header>
    )
}

export default Header
