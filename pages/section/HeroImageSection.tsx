import Image from "next/image"

export default function HeroImageSection(props: any) {
  return (
    <Image src="/app/flow_hero.png"
      layout='responsive'
      width='30'
      height='30'
    />
  )
}