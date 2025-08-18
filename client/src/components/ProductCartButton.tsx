import { motion } from "motion/react"

function ProductCartButton() {
    return (
        <motion.button
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y:0}}
            transition={{type: "tween"}}
            exit={{opacity: 0, y: 10}}
            className='absolute bottom-0 left-0 right-0 h-[50px] 
            bg-bg-secondary text-light cursor-pointer font-bold tracking-[1px]'>
            Add to cart
        </motion.button>
  )
}

export default ProductCartButton