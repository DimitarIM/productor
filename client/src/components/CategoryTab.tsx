import type { Category } from "../types"

function CategoryTab({category}:{category:Category}) {
  return (
    <div data-testid="category-tab" className="badge badge-outline text-light bg-bg-category pt-4 pb-4">
      {category.name}
      </div>
  )
}

export default CategoryTab