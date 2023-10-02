'use client'
import React, { useEffect, useState } from 'react'
import data from 'components/GridCard';import {
  PlayCircle,
  ArrowRight,
  ArrowLeft,
  ArrowCircleLeft,
  ArrowCircleRight,
} from "phosphor-react"

import {useRouter, useSearchParams} from "next/navigation"
// import { imagesArray } from '../assets/imagesArray';

type Props = {}
export default function Display({}: Props) {
    const params = useSearchParams()
    const router = useRouter()
    const image= params.get('img')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [step, setStep] = useState(0)

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + Display.length) % Display.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Display.length);
    };

    function incrementLesson() {
      if (Number(params?.get("step")) === datavvv.length - 1)
        return router.replace("/display-gallery?step=0")
      router.push(`/dashboard/course?step=${Number(params?.get("step")) + 1}`)
    }
  
    function decrementLesson() {
      if (Number(params?.get("step")) <= 0)
        return router.replace("/dashboard/course?step=0")
      router.push(`/dashboard/course?step=${Number(params?.get("step")) - 1}`)
    }
  
    useEffect(() => {
      setStep(Number(params?.get("step")))
    }, [params?.get("step")])
    
  return (
    <div className="  bg-zinc-900">
      <button onClick={handlePrev} className="p-2 m-2 bg-blue-500 text-white rounded md:absolute inline-block top-[45%] left-0 cursor-pointer">
        <ArrowLeft size={24} />
      </button>
        <img className='  md:w-auto md:h-screen max-w-3xl mx-auto shadow-md'  src={image ?? ''} alt="alt"  />
        <button onClick={handleNext} className="p-2 m-2 bg-blue-500 text-white rounded md:absolute inline-block top-[45%] right-0 cursor-pointer">
        <ArrowRight size={24} />
      </button>
    </div>
    
  )
}