import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSupabase } from "../../Components/Auth/SupabaseProvider"
import { useForm } from "react-hook-form";


export const PosterDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { posterSlug } = useParams();
  const [posterData, setPosterData] = useState(null);
  const { supabase } = useSupabase();

  const getData = async () => {
    if(supabase) {
      const { data, error } = await supabase
        .from('posters')
        .select('*')
        .eq('slug', posterSlug)
        .limit(1)
        .single();
      if(error) {
        console.error(error);
      } else {
        setPosterData(data);
      }
    }
  }

  useEffect(() => {
    getData();
  }, [posterSlug, supabase]);


  const add2cart = async (data) => {
    console.log(data);
  }

  return (
    <div className="flex flex-col md:flex-row bg-white items-center border-l-2 border-lightbrown mb-12 min-h-screen ">
      {posterData && (
        <div key={posterData.id} className="flex flex-col md:flex-row gap-4 px-6 py-4 md:py-0 w-full md:w-auto">
          <img src={posterData.image} alt="" className="h-96 md:h-auto w-full md:w-96 object-scale-down" />
          <div className="flex flex-col justify-between w-full">
            <div className="space-y-6">
              <span className="text-xl font-bold text-darkGray">{posterData.name}</span>
              <p className="" dangerouslySetInnerHTML={{ __html: posterData.description }}></p>
              <div className="flex flex-col space-y-2 md:space-y-6">
                <p className="text-darkGray"><span className="font-semibold">Størrelse:</span> {posterData.height} x {posterData.width} cm</p>
                <p className="text-darkGray"><span className="font-semibold">Varenummer (SKU):</span> {posterData.id}</p>
                <span className="text-lg font-bold text-darkGray">Kr. {posterData.price},00</span>
              </div>
            </div>
            <form onSubmit={handleSubmit(add2cart)}>
            <input type="hidden" defaultValue={posterData.id} {...register('poster_id')} />
            <input className="border-2 border-darkGray" type="number" {...register('quantity', { required: true })} />
            <button className="px-4 py-2 bg-lightbrown text-darkGray rounded-[3px] border-2 border-darkGray ml-2">Læg i kurv</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

 // const [apiData, setApiData] = useState([]);
  // const [quantity, setQuantity] = useState(1); // State for quantity input
  // const { poster } = useParams();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const url = `http://localhost:3000/posters/${poster}`;
  //       const result = await axios.get(url);
  //       setApiData([result.data]);
  //     } catch (error) {
  //       console.error("Error fetching poster details:", error);
  //     }
  //   };

  //   getData();
  // }, [poster]);

  // const handleIncrement = () => {
  //   // Increment the quantity if it's less than the available stock
  //   setQuantity((prevQuantity) =>
  //     prevQuantity < apiData[0].stock ? prevQuantity + 1 : prevQuantity
  //   );
  // };

  // const handleDecrement = () => {
  //   // Decrement the quantity if it's greater than 1
  //   setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  // };

  // const addToCart = async (id) => {
  //   try {
  //     const endpoint = `http://localhost:3000/cart/${id}`;
  //     const data = {
  //       posterId: apiData[0].id,
  //       quantity: quantity
  //     };
  //     const response = await axios.post(endpoint, data);
  //     console.log("Item added to cart:", response.data);
  //     // You can add further logic here if needed, such as displaying a success message
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //     // You can add error handling logic here, such as displaying an error message
  //   }
  // };

  {/* <div className="flex justify-between items-center w-full mt-4">
              <button onClick={addToCart} className="px-4 py-2 bg-lightbrown text-white rounded-[3px] border-2 border-darkGray ml-2">Læg i kurv</button>
            </div> */}