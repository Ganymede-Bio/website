import Image from "next/image"
import AnimateTranslate from "../../components/animations/AnimateTranslate"

export default function HeroImageSection() {
  return (
    <AnimateTranslate startX={40}>
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="relative z-0">
          <Image src="/schematic/what_is_ganymede.png"
            layout='responsive'
            width='30'
            height='30'
          />
        </div>
      </div>
    </AnimateTranslate>
  )
}