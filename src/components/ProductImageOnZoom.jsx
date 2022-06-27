import React, { useEffect, useState } from 'react';

const ProductImageOnZoom = ({ imageUrl }) => {
  const [imageContainer, setImageContainer] = useState({
    maxWidth: '90%',
    maxHeight: '90%',
    aspectRatio: '1/1',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: '0% 0%',
  });

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setImageContainer({ ...imageContainer, backgroundPosition: `${x}% ${y}%` });
  };

  useEffect(() => {
    setImageContainer({
      ...imageContainer,
      backgroundImage: `url(${imageUrl})`,
    });
  }, [imageUrl]);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={imageContainer}
      className="group sm:border-[.1rem] sm:border-slate-200 sm:rounded"
    >
      <img
        src={imageUrl}
        className="block w-full pointer-events-none group-hover:opacity-0  aspect-square object-contain bg-white rounded"
      />
    </div>
  );
};

export default ProductImageOnZoom;
