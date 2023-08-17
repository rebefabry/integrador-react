import React from 'react'
import { AboutSectionContainer, TextContainer, TextItemContainer, TitleContainer } from './AboutStyles'
import PeachLogo from "../../assets/Images/peach-logo.jpg"

const About = () => {
  return (
    <AboutSectionContainer>

        <TitleContainer>
            <img src={PeachLogo} alt="logo" />
            <h2>Peach Please</h2>
            <img src={PeachLogo} alt="logo" />                                                                  
        </TitleContainer>

        <TextContainer>
            <h3>Nuestra linea cuenta con variedad de productos para todas las pieles, además de comprometernos con vos, nos comprometemos a mejorar el mundo, por eso dejamos los beneficios que aporta la marca al medio ambiente:</h3>
            <TextItemContainer>
                    <p> ~ Libres de crueldad animal</p>
                    <p> ~ Ingredientes de origen natural, preservando el ecosistema</p>
                    <p> ~ Packaging Eco-Friendly</p>
            </TextItemContainer>
            <h3> Sé el cambio que quieres ver para el mundo, y unete a esta movida, que cuida tu piel y colabora con el planeta.</h3>
        </TextContainer>
    </AboutSectionContainer>
  )
}

export default About