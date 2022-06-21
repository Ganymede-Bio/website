import { motion } from "framer-motion"

export default function AnimateRise(props: any) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          x: 0,
          y: 20,
        },
        animate: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.25 }
        }
      }}
    >
      {props.children}
    </motion.div>
  )
}