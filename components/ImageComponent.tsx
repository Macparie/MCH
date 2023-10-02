// components/ImageComponent.tsx
'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link'
interface ImageProps {
  imageUrl: string;
  altText: string;
  hoverText: string;
  linkTo: string;
}

const ImageComponent: React.FC<ImageProps> = ({ imageUrl, altText, hoverText, linkTo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={linkTo}
      className={`relative overflow-hidden min-w-max h-[400px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={altText} className="max-w-full w-full h-auto object-contain" width={200} height={200} />
      {isHovered ? (
        <div className="absolute bottom-0 left-0 right-0  text-white h-[400px] text-center flex items-center">
          <p className='mx-auto'>{hoverText}</p>
        </div>
      ):
      (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white h-[400px] text-center flex items-center">
        </div>
      )
      }
    </Link>
  );
};

export default ImageComponent;
