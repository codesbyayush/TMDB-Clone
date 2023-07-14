import DetailCard from '@/components/DetailCard'
import fetchData from '@/utils/fetchdata'
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

  const data = await fetchData(`movie/${params.id}`)


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