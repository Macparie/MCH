// pages/index.tsx

import React from 'react';
import Image from 'next/image';
import fullLogo from '@/public/images/full-logo.png'
import GridCardComponent from 'components/GridCard';
import { imagesArray } from '@/app/assets/imagesArray';



const HomePage: React.FC = () => {
  return (
    
    <div className="p-4">
      <div className=" p-4 w-500 h-500  " >
      <Image className="w-2/3 h-1/2 object-center p-10 " src={fullLogo} alt='hello'/>

      </div>
      <h1 className="text-2xl mb-4">Clickable Image Grid</h1>
      <GridCardComponent  />
    </div>
  );
};

export default HomePage;
