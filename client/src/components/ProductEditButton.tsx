import { EditIcon } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router"

function ProductEditButton({ id }: { id: number }) {
    return (
        <Link to={`/product/${id}`}>
            <motion.button
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className='absolute flex justify-center items-center top-3 right-1 w-10 h-10 rounded-full bg-bg-secondary text-light cursor-pointer font-bold '>
                <EditIcon />
            </motion.button>
        </Link>

    )
}

export default ProductEditButton