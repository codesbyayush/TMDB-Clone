import next from "next/types";

const fetchData = async (path = "", page = 0, revalidate = 30) => {
    let urlPage = ""
    if(page > 0){
        urlPage = "&page="+page.toString
    }

    const url = `https://api.themoviedb.org/3/${path}?language=en-US${urlPage}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API}`
        },
        next: {
            revalidate: 60*60*24*revalidate
        }
    };

    const data = await fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));

    return data

}
export default fetchData
