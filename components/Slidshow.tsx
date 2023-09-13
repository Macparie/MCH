// components/Slideshow.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import image1 from '@/public/images/about-intro.jpg'
import image2 from '@/public/images/blog-post-06.jpg'
import image3 from '@/public/images/blog-post-04.jpg'
import image4 from '@/public/images/blog-post-08.jpg'


const images = [image1, image2, image3, image4];

export default function ImageSwapper() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000); // Changed interval to 5000 milliseconds (5 seconds)
        
        return () => clearInterval(intervalId);
    }, [currentIndex]); // Added currentIndex as a dependency

    return (
        <div>
            <Image className=" " src={images[currentIndex]} />
        </div>
    )
}