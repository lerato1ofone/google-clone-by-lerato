import Image from 'next/image'

function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text=gray-500">
            <div className="px-8 py-3">
                <p>South Africa</p>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
                <div className="flex justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <Image 
                    loading="lazy"
                    src="https://www.flaticon.com/svg/vstatic/svg/188/188333.svg?token=exp=1618260897~hmac=a7ccff8be17afffb3feebabf8e61d06c"
                    height={20}
                    width={20}
                    />
                        Carbon nuetral since 2007
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
