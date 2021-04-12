import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/Google-Chrome-Google-Chrome.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* Left side */}
        <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
        </div>

        {/* Right side */}
        <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
       
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url="https://www.flaticon.com/svg/vstatic/svg/633/633779.svg?token=exp=1618256232~hmac=530e2950d457c3259d2ffc407c86f15c" />
        </div>

        </header>

      {/* Body */}
      <form className="flex flex-col mt-40 items-center flex-grow ">
        <Image 
          loading="lazy"
          src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
          height={110}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus: outline-none flex-grow"/>
          <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-5 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  )
}