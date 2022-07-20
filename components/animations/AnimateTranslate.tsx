import { motion } from "framer-motion"

export default function AnimateTranslate(props: any) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: props.startX ?? 0,
          y: props.startY ?? 0,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: props.duration ?? 0.25 }
        }
      }}
      transition={{
        type: "easein"
      }}
    >
      {props.children}
    </motion.div >
  )
}