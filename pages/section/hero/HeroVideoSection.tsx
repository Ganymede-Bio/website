import { useRef, useEffect, useState } from "react"
import { imageHostURL } from "../../../utils/constants/constants";

export default function HeroVideoSection() {
  const vidRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  }

  useEffect(() => { vidRef.current.play(); }, []);

  return (
    <div className="shadow shadow-lg rounded-lg">
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="relative z-0">
          <video
            src={`${imageHostURL}/video/GanymedeHeroVideoTrimmed.mp4`}
            ref={vidRef}
            muted
            autoPlay
            loop
            playsInline
            poster={`${imageHostURL}/schematic/main.png`}
            onLoadedData={onLoadedData}
          />
        </div>
      </div>
    </div>
  )
}