import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore';
import ProductGrid from '../components/ProductGrid';
import ProductAddButton from '../components/ProductAddButton';
import { PackageOpenIcon } from 'lucide-react';
import { useCategoryStore } from '../store/useCategoryStore';

function Home() {
    const { products, fetchProducts } = useProductStore();
    const { fetchCategories } = useCategoryStore();
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [])
    return (
        <div className='flex flex-col w-full min-h-screen bg-bg-primary gap-10 pt-[90px]'>
            <ProductAddButton />
            {
                products.length !== 0 ? <ProductGrid products={products} /> :
                    <div className='flex w-full h-full text-light justify-center items-center'>
                        <div className='flex flex-col items-center justify-center text-3xl gap-7'>
                            <div>No Products To Show :(</div>
                            <PackageOpenIcon size={82} />
                        </div>
                    </div>
            }

        </div>
    )
}

export default Home