// components/GridCardComponent.tsx
'use client'
import React from 'react';
import { useRouter } from "next/navigation";
interface GridCardComponentProps {
  
}
const images = [
    '/images/inspiration-02.jpg', // Provide the correct path for your local images
    '/images/inspiration-01.jpg',
    '/images/inspiration-03.jpg',
    '/images/inspiration-04.jpg',
    '/images/inspiration-07.jpg',
    '/images/inspiration-09.jpg',
    '/images/inspiration-08.jpg',
    '/images/inspiration-03.jpg',
    '/images/inspiration-01.jpg',
    '/images/inspiration-02.jpg',
    '/images/inspiration-03.jpg',
    '/images/inspiration-05.jpg',
    // Add more local image paths as needed
  ];

const GridCardComponent: React.FC<GridCardComponentProps> = ({ }) => {
    const router = useRouter()
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={image} className="relative" onClick={()=>router.push(`/display-gallery?img=${image}`)}>
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-max h-full cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default GridCardComponent;
