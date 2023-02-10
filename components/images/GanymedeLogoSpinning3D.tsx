import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

export default function GanymedeLogoSpinning3D() {
  return (
    <motion.div
      initial={{
        rotate: 0
      }}
      animate={{
        rotateY: 360,
        transition: {
          duration: 2.0,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }}

      className="inline-block"
    >
      <Image
        src="/logo/ganymede_ball.svg"
        alt="Ganymede ball logo"
        width={50}
        height={50}
        quality={100}
      />
    </motion.div >
  )
}
