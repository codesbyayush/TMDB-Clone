import Image from 'next/image'
import React from 'react'

type Props = {
    profile_path: string,
    name:string,
    id: number,
}

const MovieCard = ({profile_path, name } :  Props) => {
  return (
    <div className='w-[160px] rounded-lg overflow-hidden'>
        <Image 
            src={`https://image.tmdb.org/t/p/w185${profile_path}`}
            height={330}
            width={180}
            alt='Movie Image'
            className='w-[160px] h-auto rounded-xl'
            priority
        />
        <h3 className='font-bold'>{name}</h3>
        <p>{}</p>
    </div>
  )
}

export default MovieCard