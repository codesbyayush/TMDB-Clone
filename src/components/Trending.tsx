
import MovieCard from "./MovieCard";


const Trending = async () => {
    
    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
      }
    };
    // first_air_date name poster_path id
    
      const data = await fetch(url, options)
      .then(res => res.json())
        .then(function (response : any) {
          return response.results;
        })
    
    
      return data && (
        <section className="bg-tertiaryGreen bg-opacity-20 ">
                <h2 className="font-semibold text-2xl tracking-wide pb-6 p-8">Trending</h2>
            <div className="grid grid-flow-col gap-4 overflow-x-scroll custom-scrollbars px-8">
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

export default Trending