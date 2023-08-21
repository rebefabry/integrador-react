import React from 'react'
import { ProductsCard } from './ProductsStyles'

const ProductCard = ({name, precio, cardImg, texto}) => {
  return (
    <ProductsCard>
        <img src={cardImg} alt={name}/>
        <h4>{name}</h4>
		<p>{texto}</p>
        <p>$ {precio} </p>
    </ProductsCard>
  )
}

export default ProductCard