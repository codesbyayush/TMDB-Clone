import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    
<nav className="bg-primaryDark ">
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
  <div className="flex gap-6 sm:px-10">
  <Link href='/movie' className="hidden mxs:block">Movie</Link>
  <Link href='/tvshow' className="hidden mxs:block">TV Shows</Link>
  <Link href='/people' className="hidden mxs:block">People</Link>
  </div>
  {/* <button> Search </button> */}
  </div>
</nav>

  )
}

export default Navbar