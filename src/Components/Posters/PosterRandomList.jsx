import { useSupabase } from "../../Components/Auth/SupabaseProvider"
import { useEffect, useState } from "react"
import { FlushArray } from "../../Utils/arrayUtils"
import { Link } from "react-router-dom"

export const PosterRandomList = () => {
  const { supabase } = useSupabase()
  const [posters, setPosters] = useState([])

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase.from("posters").select("*")
      if (error) {
        console.error("Error fetching posters", error)
      } else {
        setPosters(FlushArray(data).slice(0, 2))
      }
    }
  }

  useEffect(() => {
    getData()
  }, [supabase])

  return (
    <div className="max-w-[1000px] mx-auto">
      <h2>Udvalgte plakater</h2>
      {posters &&
        posters.map((poster) => {
          return (
            <div className="text-darkGray" key={poster.id}>
              <figure className="flex flex-row gap-4 p-6 bg-white rounded shadow-lg">
                <Link to={`/posters/details/${poster.slug}`}>
                  <img src={poster.image} alt="" />
                </Link>
              </figure>
              <div className="p-4">
                <h4 className='font-bold text-darkGray'>{poster.name}</h4>
                <p
                  className="font-bold text-darkGray"
                  dangerouslySetInnerHTML={{
                    __html: poster.description.substr(0, 120),
                  }}
                ></p>
                <p className="pb-2 text-darkGray">DKK {poster.price},00</p>
                    <Link className='border-2 border-darkGray bg-lightbrown rounded-[3px] p-2' to={`/posters/details/${poster.slug}`}>Læs mere</Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}