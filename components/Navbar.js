import Link from 'next/link'

const Navbar = () => {
  return (
      <div>
        <nav>
          <div className="mt-5 ml-10">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </div>
        </nav>
      </div>
  )
}

export default Navbar
