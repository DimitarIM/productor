import type { Product } from '../types'
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ProductCartButton from './ProductCartButton';
import ProductEditButton from './ProductEditButton';
import ProductDeleteButton from './ProductDeleteButton';
import { useProductStore } from "../store/useProductStore"

function ProductCard({ id, name, price, image, category }: Product) {
    const [isActive, setActive] = useState(false);
    const { deleteProduct } = useProductStore();

    return (
        <>
            <figure data-testid="card-figure" className='relative shadow-[0px_35px_50px_0px_rgb(23,_10,_37)] z-1'
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}>
                <img className='h-70 w-65 object-cover ' src={image} alt={name} />
                <AnimatePresence>
                    {isActive && <ProductCartButton />}
                    {isActive && id && <ProductEditButton id={id} />}
                    {isActive && id && <ProductDeleteButton id={id} deleteFunc={deleteProduct} />}
                </AnimatePresence>
            </figure>
            <div className='card-body card-md text-primary items-center bg-bg-card'>
                <h2 className='relative z-2 text-[14px] tracking-[]'>{name}</h2>
                <div className="badge badge-outline">{category}</div>
                <h3 className='text-light text-[20px]'>&#8364;{price}</h3>
            </div>
        </>


    )
}

export default ProductCard