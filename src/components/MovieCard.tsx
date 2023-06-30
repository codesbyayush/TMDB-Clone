import Image from 'next/image'
import React from 'react'

type Props = {
  poster_path: string,
  name:string,
  title:string,
  first_air_date:string,
  release_date: string,
  id: number,
}

const MovieCard = ({poster_path, first_air_date, name, title, release_date } :  Props) => {
  return (
    <div className='w-[160px] rounded-lg overflow-hidden'>
        <Image 
            src={`https://image.tmdb.org/t/p/w185${poster_path}`}
            height={330}
            width={180}
            alt='Movie Image'
            className='w-[160px] h-auto rounded-xl'
            priority
        />
        <h3 className='font-bold'>{name || title}</h3>
        <p>{first_air_date || release_date}</p>
    </div>
  )
}

export default MovieCard