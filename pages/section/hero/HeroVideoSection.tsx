// import Image from "next/image"
import { useRef, useEffect } from "react"
import AnimateTranslate from "../../../components/animations/AnimateTranslate"

export default function HeroVideoSection() {
  const vidRef = useRef(null)

  useEffect(() => { vidRef.current.play(); }, []);

  return (
    <AnimateTranslate>
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="relative z-0">
          <video
            src='video/GanymedeHeroVideo.mp4'
            ref={vidRef}
            controls
            muted
            autoPlay
            loop
          >
            {/* <source src={'/video/GanymedeHeroVideo.mp4'} type="video/mp4" /> */}
          </video>
          {/* <Image src="/schematic/main.png"
            layout='responsive'
            width='30'
            height='30'
          /> */}
        </div>
      </div>
    </AnimateTranslate>
  )
}