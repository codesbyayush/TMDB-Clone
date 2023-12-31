import Image from 'next/image'

import links from '../app/constant'
import FooterColumns from './FooterColumns'

const Footer = () => {
  return (
    <footer className='w-full bg-primaryDark'>
      <div className='max-w-[120rem] pt-20 pb-24 flex flex-col lg:flex-row items-center justify-evenly  text-white gap-10 lg:gap-0 px-6 relative mx-auto'>
      <p className='absolute text-importantLink mx-auto bottom-6 text-lg'>
        ❗All links point to the actual TMDB website</p>
        <Image 
            src='/logo2.svg'
            height={130}
            width={130}
            alt='logo'
            className='w-40 h-auto'
        />
        <nav className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {links.map( link => (
                <FooterColumns cateogary={link[0][0]} options={link[1]}/>
            ))}
        </nav>
        </div>
    </footer>
  )
}

export default Footer