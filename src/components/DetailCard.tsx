import Image from 'next/image'
import React from 'react'

type Props = {
    poster_path: string,
    networks: [{
        name: string,
        logo_path: string
    }],
    genres: [{
        name: string
    }],
    name:string,
    id: number,
    overview: string,
    tagline: string,
    created_by: [{
        name: string
    }],
    title: string
}

const DetailCard = ({ poster_path,
                    networks,
                    name,
                    id,
                    genres,
                    overview,
                    tagline,
                    created_by,
                    title
} :  Props) => {

  return (
    <div className='flex flex-col sm:flex-row gap-8 p-8 max-w-5xl mx-auto sm:items-center'>

        <div className='min-w-fit h-auto'>

            <Image 
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                height={450}
                width={300}
                alt='Movie Image'
                className='rounded-lg w-full sm:w-72 h-auto'
                priority
            />
            {/* {networks &&  <div className=''>
            <Image 
                src={`https://image.tmdb.org/t/p/w185${networks[0]?.logo_path}`}
                height={330}
                width={180}
                alt='Movie Image'
                className='w-[160px] h-auto rounded-xl'
                priority
            />  
            <h3 className='font-bold'>{networks[0]?.name}</h3>
            </div>} */}

        </div>

        <div className='col-span-2 font-medium flex flex-col gap-[.7em] max-w-4xl justify-center'>
            <h1 className='font-extrabold text-4xl '>{name || title}</h1>
            <div className='flex flex-wrap'>
                {genres.map(genre => (
                    <p className='whitespace-nowrap '>{genre.name}, &nbsp;</p>
                ))}
            </div>
            <h3 className='italic font-semibold'>{tagline}</h3>
            <h2 className='font-semibold text-xl'>Overview</h2>
            <p>{overview}</p>
            {created_by &&
            (<div><h4 className='text-lg font-medium'>Created by</h4>
             <p>{created_by[0]?.name}</p>
             </div>)}
        </div>
        
    </div>
  )
}

export default DetailCard