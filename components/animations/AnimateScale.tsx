import React from 'react'
import { motion } from "framer-motion"

export default function AnimateScale(props: any) {
  return (
    <motion.div
      whileHover={{
        scale: props.scale,
        originX: 0
      }}
    >
      {props.children}
    </motion.div>
  )
}