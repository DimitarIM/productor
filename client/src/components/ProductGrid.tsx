import type { Product } from '../types'
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

function ProductGrid({ products }: { products: Product[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <div className='flex justify-center p-5'>
            <motion.div
                key={products.map(p => p.id).join(',')}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-6'>
                {
                    products!.map((product) => (
                        <motion.div key={product.id}
                            variants={itemVariants}>
                            <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} />
                        </motion.div>

                    ))
                }
            </motion.div>
        </div>

    )
}

export default ProductGrid