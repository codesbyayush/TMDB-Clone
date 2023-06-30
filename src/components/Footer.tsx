import Image from 'next/image'

import links from '../app/constant'
import FooterColumns from './FooterColumns'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-24 flex flex-col lg:flex-row items-center justify-evenly bg-primaryDark text-white gap-10 lg:gap-0'>
        <Image 
            src='/logo2.svg'
            height={130}
            width={130}
            alt='logo'
            className='w-40 h-auto'
        />
        <nav className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {links.map( link => (
                <FooterColumns cateogary={link[0][0]}   options={link[1]}/>
            ))}
        </nav>
    </footer>
  )
}

export default Footer