import React from 'react'
import LogoSvg from './LogoSvg'

export default function NavbarLogo({setActiveScreen}) {
  return (
    <button onClick={() => setActiveScreen("Home")} id='navbarLogoContainer'>
       <LogoSvg />
    </button>
  )
}
