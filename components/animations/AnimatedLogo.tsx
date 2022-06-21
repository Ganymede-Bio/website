import Image from "next/image"
import { motion } from "framer-motion"

export default function AnimatedLogo() {
  return (

    <motion.a href="/"
      whileHover={{ scale: 1.1 }}
    >
      <Image
        className="border-solid border-white"
        src="/logo/ganymede_logo_white.png"
        alt=""
        width={139}
        height={28}
        quality={100}
      />
    </motion.a >
  )
}