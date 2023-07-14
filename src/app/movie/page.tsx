'use client'

import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";



const Page = () => {


  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [end, setEnd] = useState(false);

  const fn = async (url:any, options:any) => {
    const fetchRes = await fetch(url, options)
                      .then(res => res.json())
    if(page == fetchRes.total_results) setEnd(true);
    const data = fetchRes.results;
      if(data) setData(data);
        setLoading(false);
  }

  const nextPage = (event: React.MouseEvent<HTMLElement>) => {
    setPage(prev => prev+1);
  }

  useEffect(() => {
    const currPage = page.toString();
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currPage}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`
      },
    };
    fn(url , options);


  },[page])


  return !loading && (
    <section className="bg-tertiaryGreen bg-opacity-10 custom-scrollbars">
      <div className="flex gap-6 overflow-x-scroll custom-scrollbars justify-center flex-wrap sm:px-8 px-2 pt-8 max-w-5xl mx-auto">
        {data.map((item: {
          poster_path: string,
          name: string,
          title: string,
          first_air_date: string,
          release_date: string,
          id: number,
        }) => (
          <MovieCard type={'movie'}
          {...item}

          
          key={item.id} />
        ))}
      </div>
      {!end && (<div className="max-w-[870px] mx-auto pt-2 pb-4 flex justify-center">
        <button className="h-auto w-32 rounded-xl bg-secondaryBlue uppercase text-white font-semibold text-lg p-3 hover:bg-primaryDark"
        onClick={nextPage}>next</button>
      </div>)}
    </section>
  )
}

export default Page