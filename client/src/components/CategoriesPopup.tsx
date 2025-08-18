import { motion } from "motion/react"
import type { Category } from "../types"
import CategoryTab from "./CategoryTab"

function CategoriesPopup({ categories }: { categories: Category[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="absolute top-14 left-1/2 -translate-x-1/2 w-full border-primary bg-bg-secondary">
      <div className="relative grid grid-cols-1 auto-rows-min justify-items-center place-items-center gap-3 pt-4 pb-4">
        <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent"></div>
        {
          categories.map((category, index) => (
            <CategoryTab key={index} category={category} />
          ))
        }
      </div>
    </motion.div>

  )
}

export default CategoriesPopup