// components/Slideshow.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import image1 from '@/public/images/inspiration-12.jpg'
import image2 from '@/public/images/inspiration-07.jpg'
import image3 from '@/public/images/inspiration-03.jpg'
import image4 from '@/public/images/inspiration-08.jpg'
import image5 from '@/public/images/inspiration-05.jpg'
import image6 from '@/public/images/inspiration-09.jpg'
import image7 from '@/public/images/inspiration-04.jpg'
import image8 from '@/public/images/inspiration-01.jpg'



const images = [image1, image2, image3, image4, image5, image6, image8, image7];

export default function ImageSwapper() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 3000); // Changed interval to 5000 milliseconds (5 seconds)
        
        return () => clearInterval(intervalId);
    }, [currentIndex]); // Added currentIndex as a dependency

    return (
        <div className=' bg-slate-900 '>
            <Image  alt='my imag'className="object-fit w-500 h-500  " src={images[currentIndex]} />
        </div>
    )
}