import DetailCard from '@/components/DetailCard'
import React from 'react'

type props = {
    params: {
        id: number
    }
}
type data = {
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
    }]
  }

const page = async ( {params} : props) => {

  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
  };
  
  const data = await fetch(url, options)
    .then(res => res.json())


  return (
    <div>
        <section>
            <DetailCard {...data}/>
        </section>
        <section>

        </section>

    </div>
  )
}

export default page