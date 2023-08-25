import React from 'react'
import { FooterContainer, LogosContainer } from './FooterStyles'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <FooterContainer>
        <p>© 2023 Peach Please - Made by Rebeca Fabbricatore</p>

        <LogosContainer>
            <BsInstagram/>
            <BsFacebook/>
            <BsTiktok/>
            <BsGithub/>
        </LogosContainer>
    </FooterContainer>
  )
}

export default Footer