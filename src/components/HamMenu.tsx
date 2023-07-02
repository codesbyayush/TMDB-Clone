'use client'
import React from 'react'
import { useState, useRef } from 'react'
import Link from 'next/link'

const HamMenu = () => {

    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLInputElement | null>(null);
    const clicked = () => {
        setOpen(prev => !prev)
    }
  return (
    <div className='sm:hidden relative' onClick={clicked}>
    <label htmlFor="check">
      <input type="checkbox" id="check" ref={ref}/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
    { ref.current?.checked && 
        <div className='bg-primaryDark h-52 w-screen absolute -right-4 flex-col flex justify-evenly text-xl items-end p-10 animate-bounce-once'>
            <Link href='/movie'>Movie</Link>
            <Link href='/tvshow'>TV Shows</Link>
            <Link href='/people'>People</Link>
        </div>
    }
    </div>
  )
}

export default HamMenu