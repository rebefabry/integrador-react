import React from 'react'
import { ReviewSectionContainer, Slider, SliderContainer, TextContainer } from './ReviewStyles'
import ReviewImage from "../../assets/Images/slider-1.jpg"

const Review = () => {
  return (
    <ReviewSectionContainer>
        <TextContainer>
            <h2>Reviews</h2>
            <p>SUS COMENTARIOS NOS AYUDAN A SEGUIR MEJORANDO!!</p>
        </TextContainer>

        <SliderContainer>
            <Slider>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, atque pariatur.</p>
            <img src={ReviewImage} alt="First Comment"/>
            <h3>Diana</h3>
            </Slider>
        </SliderContainer>
    </ReviewSectionContainer>
  )
}

export default Review