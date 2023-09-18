'use client'
import React, { useEffect } from 'react'
import {useSearchParams} from "next/navigation"
type Props = {}
export default function Display({}: Props) {
    const params = useSearchParams()

    const image= params.get('img')
  return (
    <div>
        <img src={image ?? ''} alt="alt"  />
    </div>
  )
}