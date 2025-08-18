import { DeleteIcon } from "lucide-react"
import { motion } from "motion/react"

function ProductDeleteButton({ id, deleteFunc }: { id: number, deleteFunc: (id: number) => void }) {

    return (
        <motion.button
            onClick={() => deleteFunc(id)}

            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className='absolute flex justify-center items-center top-15 right-1 w-9 h-9 rounded-full bg-light text-bg-secondary cursor-pointer font-bold '>
            <DeleteIcon />
        </motion.button>

    )
}

export default ProductDeleteButton