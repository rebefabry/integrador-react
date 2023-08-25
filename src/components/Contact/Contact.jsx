import React from 'react'
import { ContactContainer, ContactForm, ContactSection, ContactText } from './ContactStyles'
import { TextContainer } from '../ReviewSection/ReviewStyles'

const Contact = () => {
  return (
    <ContactSection>

        <TextContainer>
            <h2>Contacto</h2>
            <p>Completa el formulario para recibir nuestras novedades</p>
        </TextContainer>

        <ContactContainer>

          <ContactForm>
            <h3>Completa los siguientes datos:</h3>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
          </ContactForm>

          <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13139.525222260923!2d-58.44447847713208!3d-34.581869770900084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5924702e2d1%3A0x70b075b79ca9b53e!2sPalermo%20Hollywood%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1677645724145!5m2!1ses-419!2sar" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </ContactContainer>

        <ContactText>
          <p>Domicilio direccion inventada 1234 - Capital Federal</p>
        </ContactText>
    </ContactSection>
  )
}

export default Contact