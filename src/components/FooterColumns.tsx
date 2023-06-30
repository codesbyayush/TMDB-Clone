import Link from 'next/link'
import React from 'react'

type Props = {
    cateogary: string,
    options: Array<string>
}

const FooterColumns = ({ cateogary , options }: Props) => {
  return (
    <div>
        <h1 className='text-lg font-bold mb-3'>
            {cateogary}
        </h1>
        <section className='flex flex-col gap-1'>
        {options.map(option => (
            <Link href={'/'} className='font-semibold leading-5'>
                {option}
            </Link>
        ))}
        </section>
        
    </div>
  )
}

export default FooterColumns