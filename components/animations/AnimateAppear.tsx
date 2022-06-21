import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


export default function AnimateAppear(props: any) {
  const { ref: motionRef, inView } = useInView({ threshold: props.threshold ?? 0.2 })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: props.endX ?? 0,
        y: props.endY ?? 0,
        opacity: 1,
        transition: {
          type: 'easein',
          duration: props.duration ?? 0.5
        }
      })
    }
    if (!inView) {
      animation.start({
        x: props.startX ?? 0,
        y: props.startY ?? 0,
        opacity: 0
      })
    }
  })

  return (
    <motion.div
      ref={motionRef}
      animate={animation}
    >
      {props.children}
    </motion.div >
  )
}