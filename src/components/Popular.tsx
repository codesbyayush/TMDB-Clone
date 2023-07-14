import fetchData from "@/utils/fetchdata";
import MovieCard from "./MovieCard";

const Popular = async () => {
    
    const data = await fetchData("movie/popular",1, 1)
            .then(dataRaw => dataRaw.results)
    
      return  data && (
        <section className="bg-tertiaryGreen bg-opacity-20 custom-scrollbars pb-12">
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

