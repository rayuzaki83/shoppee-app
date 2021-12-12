import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
        <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                  {/* Logo goes here   */}
                  <div className=" flex items-center py-4 px-2 m-2">
                    <Link href="/">
                      <a>
                        <Image
                          src="/shop-logo.png"
                          alt="shop logo"
                          width="50"
                          height="50"
                          />
                      </a>
                    </Link>
                    <Link href="/"><a><span className="text-xl text-gray-600 font-semibold ml-4">
                      The Shoppee Club
                    </span></a></Link>
                  </div>

                  {/* Primary Nav items here */}
                  <div className="flex items-center py-4 px-2 m-2">
                    <Link href="/"><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 border-green-500 ml-10">Home</a></Link>
                    <Link href="/about"><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 border-green-500 ml-5">About</a></Link>
                    <Link href="/contact"><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 border-green-500 ml-5">Contact</a></Link>
                  </div>

                  {/* Secondary Navbar items here */}
                  <div className="flex items-center px-9" >
                    <a href="#" className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 border-green-500 m-5">Log In</a>
                    <a href="#" className="py-2 px-2 font-medium text-white bg-green-600 rounded-lg hover:text-white hover:bg-green-700 transition duration-300">Sign up</a>
                  </div>

              </div>
            </div>
          </div>
        </nav>
  )
}

export default Navbar
