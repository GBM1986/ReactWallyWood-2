import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import React, { useState, useEffect } from 'react';
import TruncatedDescription from '../../Components/TruncatedDescription/TruncatedDescription.jsx';
import Modal from '../../Components/Modal/Modal.jsx';

export const Home = () => {
  const [posterData, setPosterData] = useState([]);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const genres = [
    "Komedie",
    "Gysere",
    "Musik",
    "Krigsfilm",
    "Thriller",
    "Action",
    "Drama",
    "Adventure",
    "Western",
    "Danske film",
    "Romantik",
    "Dokumentar"
  ];

  const fetchPosters = async (genre) => {
    try {
      const response = await fetch(`http://localhost:3000/posters/list_by_genre/${encodeURIComponent(genre)}?sort_key=random&sort_direction=desc&limit=2&attributes=id,name,image,width,height,stock,price,description,slug`);  
      const data = await response.json();

      // Take the first two posters after sorting
      const topTwoPosters = data.slice(0, 2);

      setPosterData(topTwoPosters);
    } catch (error) {
      console.error('Error fetching posters data:', error);
    }
  };

  const openModal = (poster) => {
    setSelectedPoster(poster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPoster(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!hasFetched) {
      // Randomly select a genre
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      fetchPosters(randomGenre);
      setHasFetched(true);
    }
  }, [hasFetched, genres]);

  return (
    <ContentWrapper        
    description="Her finder du nye og gamle film plakater"
    subtitle="Udvalgte plakater"
  >
    <div className='bg-primary'>     
      <main>
        <div className="bg-white max-w-[1200px] mx-auto">
          <img className='max-w-full h-auto mx-auto object-contain' src="src/assets/images/curtain.jpg" alt="HeroImage" />
        </div>
        <div className="max-w-[1200px] mx-auto bg-white" id='wrapper'>
          <section className='max-w-[1054px] mx-auto bg-white p-6'>
            <h3 className='text-orange text-3xl font-bold font-titillium-web mb-12'>
              Sidste nyt...
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-darkGray'>
              {posterData.map((poster) => (
                <div className='flex-auto w-full flex flex-col md:flex-row lg:flex-row xl:flex-row items-center' key={poster.id}>
                  <img className='h-76 md:h-auto md:w-1/2 lg:w-1/2 xl:w-1/2 object-cover cursor-pointer' src={poster.image} alt={poster.name} onClick={() => openModal(poster)} />
                  <div className='ml-4 md:w-full lg:w-1/2 xl:w-1/2'>
                    <p className='font-bold'>{poster.name}</p>
                    <TruncatedDescription description={poster.description} maxCharacters={150} />
                    <p className='font-bold mt-2'>Genre: {poster.genres[0]?.title || 'N/A'}</p>
                    <button className='border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6' onClick={() => openModal(poster)}>Læs mere</button>
                    
                  </div>
                </div>
              ))}
            </div>
            <div className='h-screen'></div>
          </section>
          {isModalOpen && <Modal poster={selectedPoster} closeModal={closeModal} />}
        </div>
      </main>
    </div>
    </ContentWrapper>
  );
};

