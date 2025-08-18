import { PackagePlusIcon } from 'lucide-react'
import ProductAddPopUp from './ProductAddPopUp'
import { useState } from 'react';

function ProductAddButton() {
    const [isOpen, setModal] = useState(false);
    
    return (
        <>
            <button onClick={() => setModal(true)} className='flex ml-10 pt-4 items-center gap-2 text-light hover:text-primary transition-colors duration-200 w-fit h-fit text-4xl cursor-pointer'>
                <PackagePlusIcon size={72} />
                Add
            </button>
            {isOpen && <ProductAddPopUp setModal={setModal}/>}
        </>
    )
}

export default ProductAddButton