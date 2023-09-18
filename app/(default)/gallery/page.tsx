// pages/index.tsx

import React from 'react';
import Image from 'next/image';
import GridCardComponent from 'components/GridCard';



const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Clickable Image Grid</h1>
      <GridCardComponent  />
    </div>
  );
};

export default HomePage;
