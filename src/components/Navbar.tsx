import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    
<nav className="bg-primaryDark ">
  <div className="flex justify-between items-center px-4 py-6 text-white font-semibold mx-auto max-w-6xl">
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
  <Link href='/movie' className="hidden sm:block">Movie</Link>
  <Link href='/tvshow' className="hidden sm:block">TV Shows</Link>
  <Link href='/people' className="hidden sm:block">People</Link>
  </div>
  <button> Search </button>
  </div>
</nav>

  )
}

export default Navbar