import Image from "next/image";
import { motion } from "framer-motion";

export default function GanymedeLogoSpinning2D() {
  return (
    <motion.div
      initial={{
        rotate: 0
      }}
      animate={{
        rotate: 360,
        transition: {
          duration: 0.5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }}

      className="inline-block"
    >
      <Image
        src="/logo/ganymede_ball.svg"
        alt=""
        width={50}
        height={50}
        quality={100}
      />
    </motion.div >
  )
}
