// components/ImageGrid.tsx

// components/ImageGrid.tsx

import React from 'react';
import Image from 'next/image';
import ImageComponent from './ImageComponent';
import FeaturesImage01 from '@/public/images/inspiration-02.jpg'
import FeaturesImage02 from '@/public/images/inspiration-04.jpg'
import FeaturesImage03 from '@/public/images/inspiration-11.jpg'
import FeaturesImage04 from '@/public/images/inspiration-6.jpg'



const ImageGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <ImageComponent
        altText="Image 1"
        hoverText="Text for Image 1"
        linkTo="/gallery"
        imageUrl={'/images/inspiration-07.jpg'}      />

      <ImageComponent
        altText="Image 2"
        hoverText="Text for Image 2"
        linkTo="/gallery"
        imageUrl='/images/inspiration-09.jpg'
      />

      <ImageComponent
        altText="Image 3"
        hoverText="Text for Image 3"
        linkTo="/gallery"
        imageUrl='/images/inspiration-12.jpg'
      />

      <ImageComponent
        altText="Image 4"
        hoverText="Text for Image 4"
        linkTo="/gallery"
        imageUrl='/images/inspiration-05.jpg'
      />
    </div>
  );
};

export default ImageGrid;
