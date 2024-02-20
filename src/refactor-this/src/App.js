import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import ImageCard from './components/ImageCard';

function ImageGallery() {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('nature');
  const [batch, setBatch] = useState(4);
  const [currentBatch, setCurrentBatch] = useState(1);
  const [loading, setLoading] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [activeCategory, batch, currentBatch, disabledPrev, disabledNext]);

  const fetchImages = async () => {
    setLoading(true);

    let promises = [];

    for (let i = currentBatch; i < batch; i++) {
      // await fetch(`http://localhost:8888/images?category=${activeCategory}&page=${i}`)
      await fetch(`https://image-sharing-app-t4xs.onrender.com/images?category=${activeCategory}&page=${i}`)
        .then((response) => response.json())
        .then((data) => promises.push(data));
    }

    const images = promises.flat();
    setData(images);

    updatePaginationState(images.length);

    setLoading(false);
  };

  const updatePaginationState = (imageCount) => {
    if (currentBatch === 1) {
      setDisabledPrev(true);
    } else if (imageCount < 9) {
      setDisabledNext(true);
    } else {
      setDisabledPrev(false);
      setDisabledNext(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setBatch(4);
    setCurrentBatch(1);
  };

  const handlePaginationAdd = () => {
    setBatch(batch + 3);
    setCurrentBatch(currentBatch + 3);
  };

  const handlePaginationMinus = () => {
    setBatch(batch - 3);
    setCurrentBatch(currentBatch - 3);
  };

  const downloadImage = async (imageUrl, imageName) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="galleryWrapper">
      <div className="grid grid-cols-3 gap-3 content-start flex items-center justify-center headernav">
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase headernav_button" onClick={() => handleCategoryChange('nature')}>Nature</button>
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase headernav_button" onClick={() => handleCategoryChange('architecture')}>Architecture</button>
        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase headernav_button" onClick={() => handleCategoryChange('fashion')}>Fashion</button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-20 gap-x-14 mt-10 mb-5 p-4">
            {data.map((image, index) => (
              <ImageCard key={index} image={image} onDownload={downloadImage} />
            ))}
          </div>
          <Pagination disabledPrev={disabledPrev} disabledNext={disabledNext} onAdd={handlePaginationAdd} onMinus={handlePaginationMinus} />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
