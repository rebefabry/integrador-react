import React from 'react'
import { ProductContainer} from './ProductsStyles'
import {products} from '../../data/data'
import ProductCard from './ProductCard'

const Products = () => {
  return (
   <ProductContainer>{
        products.map((product) => {
            return <ProductCard
            {...products}
            key={product.id}
            />
           
        })
    }

   </ProductContainer>
  )
}

export default Products