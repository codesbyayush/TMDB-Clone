import MovieCard from "./MovieCard";

const Popular = async () => {
    
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
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
        })
    
    
      return data && (
        <section className="bg-tertiaryGreen bg-opacity-20 custom-scrollbars">
                <h2 className="font-semibold text-2xl tracking-wide pb-6 p-8">What's Popular</h2>
            <div className="grid grid-flow-col-dense gap-4 overflow-x-scroll custom-scrollbars px-8">
                {data.map((item : {
                    poster_path: string,
                    name:string,
                    title:string,
                    first_air_date:string,
                    release_date: string,
                    id: number,
                    media_type: string
                }) => (
                    <MovieCard type={item.media_type} {...item} key={item.id}/>
                ))}
            </div>
        </section>
      )
    }

export default Popular