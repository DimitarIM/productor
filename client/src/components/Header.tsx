import { CirclePlus, ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router"
import CategoriesLink from "./CategoriesLink"
import CategoriesPopup from "./CategoriesPopup"
import { useCategoryStore } from "../store/useCategoryStore";
import { useState } from "react"
import CategoriesAdd from "./CategoriesAdd"

function Header() {
  const [isOpen, setModal] = useState(false);
  let path = useLocation().pathname;
  const { categories } = useCategoryStore();

  return (
    <nav className="fixed flex text-primary bg-bg-secondary w-full justify-center z-20 h-[70px] pr-10 pl-10">
      <ul className="flex justify-between w-full max-w-[1500px] text-[35px] font-semibold gap-10 tracking-[1px]">
        <li className="flex h-full pr-5 border-r-3 border-r-bg-primary p-1">
          <Link to="/" className="flex gap-2 items-center ">
            <div className="h-8 w-8">
              <img className="h-full w-full animate-spin [animation-duration:5s] " src="/img/productor.png" alt="logo" />
            </div>
            <h1>Productor</h1>
          </Link>
        </li>
        <div className="flex gap-10 h-full items-center">
          {
            path === "/" && <li className="font-light">
              <CategoriesLink
                children="Categories"
                CategoriesPopup={
                  <CategoriesPopup categories={categories} />
                } />
            </li>
          }

          <li>
            <Link to="/cart">
              <ShoppingCart size={32} className="hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
            </Link>
          </li>
          <li>
            <button onClick={() => setModal(!isOpen)}>
              <CirclePlus size={32} className="hover:-translate-y-0.5 transition-transform duration-200 ease-out mt-4" />
            </button>
            {isOpen && <CategoriesAdd/>}
          </li>
        </div>

      </ul>
    </nav>
  )
}

export default Header