import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

function Header() {
    const router = useRouter();
    const searchInputReference = useRef(null);

    return (
        <header>
            <Image    
            loading="lazy"
            src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
            width={120}
            height={40}
            className="cursor-pointer"
            onClick={() => router.push("/")}
            />
            <form className="flex px-6 py-3 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputReference} className="flex-grow w-full focus:outline-none" type="text"/>
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
                     onClick={() => searchInputReference.current.value = ""} />
            </form>
        </header>
    )
}

export default Header
