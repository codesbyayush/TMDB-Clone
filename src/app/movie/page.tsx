import React from "react";
import MovieCard from "../../components/MovieCard";

const Page = async () => {

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
  };
  
  
      
        const data = await fetch(url, options)
        .then(res => res.json())
        .then(function (response : any) {
          return response.results;
        }).catch(err => console.error('error:' + err));
      
      
        return data && (
          <section className="bg-tertiaryGreen bg-opacity-10 custom-scrollbars">
              <div className="flex gap-6 overflow-x-scroll custom-scrollbars justify-center flex-wrap sm:px-8 sm:py-8 px-2 py-8 max-w-5xl mx-auto">
                  {data.map((item : {
                      poster_path: string,
                      name:string,
                      title:string,
                      first_air_date:string,
                      release_date: string,
                      id: number,
                  }) => (
                      <MovieCard {...item} key={item.id}/>
                  ))}
              </div>
          </section>
        )
      }

export default Page