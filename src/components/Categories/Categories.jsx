import React from 'react'
import { CategoriesContainer, CategoryButton } from './CategoriesStyles'

const Categories = () => {
  return (
    <CategoriesContainer>

        <CategoryButton>Todos</CategoryButton>
        <CategoryButton>Cremas</CategoryButton>
        <CategoryButton>Balsamos</CategoryButton>
        <CategoryButton>Exfoliantes</CategoryButton>
        <CategoryButton>Serums</CategoryButton>
        <CategoryButton>Limpieza</CategoryButton>

    </CategoriesContainer>
  )
}

export default Categories