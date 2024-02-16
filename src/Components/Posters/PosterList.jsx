import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSupabase } from "../../Components/Auth/SupabaseProvider"

export const PosterList = () => {
  const { genreSlug } = useParams()
  const [posters, setPosters] = useState([])
  const { supabase } = useSupabase()

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("genres")
        .select("id, title, posters(id,name,image,price,slug)")
        .eq("slug", genreSlug)
      if (error) {
        console.error("Error fetching posters", error)
      } else {
        const sortedData = data[0].posters.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
        setPosters(sortedData)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [genreSlug, supabase])

  return (
    <div>
      <h1>Plakater - {genreSlug}</h1>
      <div>
        {posters &&
          posters.map((poster) => {
            return (
              <div key={poster.id}>
                <figure>
                  <Link to={`/posters/details/${poster.slug}`}>
                    <img src={poster.image} alt="" />
                  </Link>
                </figure>
                <p>
                  <Link to={`/posters/details/${poster.slug}`}>
                    {poster.name}
                  </Link>
                </p>
                <p>DKK {poster.price},00</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}


        // const [apiData, setApiData] = useState([]);
        // const [searchInput, setSearchInput] = useState("");
        // const { genre } = useParams();

        // const getData = async () => {
        //     const url = `http://localhost:3000/posters/list_by_genre/${genre}`;
        //     const result = await axios.get(url);
        //     setApiData(result.data);
        // };

        // useEffect(() => {
        //     getData();
        // }, [genre]);

        // const handleChange = (e) => {
        //     setSearchInput(e.target.value);
        // };

        // const filteredData = apiData.filter((item) => {
        //     return item.name.toLowerCase().includes(searchInput.toLowerCase());
        // });          