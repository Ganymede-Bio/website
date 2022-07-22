import React from 'react'
import Image from "next/image"
import AnimateTranslate from "../../../components/animations/AnimateTranslate"

export default function HeroImageSection() {
  return (
    <AnimateTranslate>
      <div style={{ borderRadius: '2px', overflow: 'hidden' }}>
        <div className="relative z-0 shadow shadow-md">
          <Image src="/schematic/main.png"
            layout='responsive'
            priority={true}
            // loading={'eager'}
            alt="Ganymede hero image"
            width='30'
            height='30'
          />
        </div>
      </div>
    </AnimateTranslate>
  )
}