import React from 'react';

const Modal = ({ poster, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md md:max-w-sm lg:max-w-3xl p-8 rounded-lg max-sm:mt-[400px] max-md:mt-[300px] max-lg:mt-[200px]">
        <span className="absolute top-0 right-0 cursor-pointer text-darkGray m-4 max-md:pt-12 max-sm:pt-12 max-lg:pt-3" onClick={closeModal}>&times;</span>
        <h2 className="text-2xl font-bold mb-2 text-darkGray">{poster.name}</h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          <img src={poster.image} alt={poster.name} className="w-full lg:w-1/2 h-auto mb-4 rounded-lg" />
          <div className="lg:w-1/2">
            <p className="text-darkGray mb-4"><strong>Description:</strong></p>
            <p dangerouslySetInnerHTML={{ __html: poster.description }} />
            <p className="text-darkGray"><strong>Genre:</strong> {poster.genres.map(genre => genre.title).join(', ')}</p>
            <p className="text-darkGray"><strong>Stock:</strong> {poster.stock}</p>
            <p className="text-darkGray"><strong>Price:</strong> {poster.price}</p>
            <p className="text-darkGray"><strong>Dimensions:</strong> {poster.width}cm x {poster.height}cm</p>
            <button className="mt-2 px-4 py-2 bg-lightbrown rounded-[3px] border-2 border-darkGray">Læg i kurv</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
