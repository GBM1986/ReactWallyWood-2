import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"
import React from 'react';
import Modal from '../../Components/Modal/Modal.jsx';
import { PosterRandomList } from "../../Components/Posters/PosterRandomList.jsx";

export const Home = () => {

  const openModal = (poster) => {
    setSelectedPoster(poster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPoster(null);
    setIsModalOpen(false);
  };

  return (
    <ContentWrapper        
    description="Her finder du nye og gamle film plakater"
    subtitle="Udvalgte plakater"
  >
    <div className='bg-primary'>     
      <main>
        <div className="bg-white max-w-[1200px] mx-auto">
          <img className='max-w-full h-auto mx-auto object-contain' src="src/assets/images/curtain.jpg" alt="HeroImage" />
          <PosterRandomList />
        </div>
        
      </main>
    </div>
    </ContentWrapper>
  );
};

