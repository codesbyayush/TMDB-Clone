import Link from "next/link"
import Image from "next/image"
import HamMenu from "./HamMenu"

const Navbar = () => {
  return (
    
<nav className="bg-primaryDark">
  <div className="flex justify-between items-center px-4 py-6 text-white font-semibold mx-auto max-w-[61rem]">
  <div className="flex  gap-6 items-center ">
    <Link href='/'>
  <Image 
    src={'/logo.svg'}  
    height={70}
    width={200}
    alt="Logo"
    className="h-[25px] sm:h-5 w-auto px-4"
    priority
  />
  </Link>
  </div>
  <div className="sm:flex gap-6 sm:px-10 hidden">
  <Link href='/movie' >Movie</Link>
  <Link href='/tvshow' >TV Shows</Link>
  <Link href='/people' >People</Link>
  </div>
  <HamMenu />
  </div>
</nav>

  )
}

export default Navbar