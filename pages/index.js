import Head from 'next/head'
import Avatar from '../components/Avatar'
import {Microphone, ViewGridIcon} from '@heroicons/react/solid'

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
       

        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png" />
        </div>

        </header>
      {/* Body */}

      {/* Footer */}
    </div>
  )
}