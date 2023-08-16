import React from 'react'
import { HeroContainer, HeroImageContainer, HeroSecondImagesContainer, HeroTextContainer } from './HeroStyles'
import HeroImage from "../../assets/Images/Hero.png";
import CrueltyFreeImage from "../../assets/Images/crueltyFree.png"
import VeganImage from "../../assets/Images/vegan.png"

const Hero = () => {
  return (
    <HeroContainer>

        <HeroImageContainer>
            <img src={HeroImage} alt="Principal"/>
        </HeroImageContainer>
    
        <HeroTextContainer>
            <h1>Filters are great but skincare is better.</h1>
            <p>Nuestros productos de skincare estan diseñados para nutrir la piel con productos naturales y anti-inflamatorios.</p>
            <p>Luce una piel radiante, hermosa, y con brillo natural, explora nuestra web y sumergete en el mundo del cuidado personal.</p>
    
            <HeroSecondImagesContainer>
                <img src={CrueltyFreeImage} alt="Cruelty Free"/>
                <img src={VeganImage} alt="Vegan Products"/>
            </HeroSecondImagesContainer>
        </HeroTextContainer>

    </HeroContainer>
  )
}

export default Hero