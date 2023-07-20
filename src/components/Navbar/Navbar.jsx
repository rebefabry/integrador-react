import React from 'react'
import { BagStyledContainer, LinksContainer, NavContainer, NavTitleContainer } from './NavbarStyles'
import {BsBagHeartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <NavContainer>
      <NavTitleContainer>
        <p>Peach Please</p>
      </NavTitleContainer>
      
      <LinksContainer>
      <a href="#">Inicio</a>
      <a href="#">Acerca de nosotros</a>
      <a href="#">Productos</a>
      <a href="#">Reviews</a>
      <a href="#">Contacto</a>
      <a href="#">Log in</a>
      </LinksContainer>

      <BagStyledContainer>
        <BsBagHeartFill/>
      </BagStyledContainer>
    </NavContainer>
  )
}


export default Navbar