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
            src={'/video/GanymedeHeroVideoTrimmed.mp4'}
            ref={vidRef}
            muted
            autoPlay
            loop
          />
        </div>
      </div>
    </AnimateTranslate >
  )
}