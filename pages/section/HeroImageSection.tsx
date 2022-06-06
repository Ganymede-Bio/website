import Image from "next/image"

export default function HeroImageSection() {
  return (
    <div className="relative z-0">
      <Image src="/app/flow_hero.png"
        layout='responsive'
        width='30'
        height='30'
      />
    </div >
  )
}