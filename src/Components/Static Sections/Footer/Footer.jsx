import React from 'react'
import '../../../CSS/Footer/Footer.css'
import FooterBanner from './FooterSections/FooterBanner'
import FooterIcons from './FooterSections/FooterIcons'

export default function Footer() {
  return (
    <div id='footerContainer'>
      <FooterBanner />
      <FooterIcons />
    </div>
  )
}
