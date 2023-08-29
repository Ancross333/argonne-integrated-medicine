import React from 'react'
import '../../../CSS/Navbar/Navbar.css'
import NavbarButtons from './NavbarSections/NavbarButtons'
import NavbarLogo from './NavbarLogo'

export default function Navbar({setActiveScreen}) {
  return (
    <div id='navbarContainer'>
        <NavbarLogo setActiveScreen={setActiveScreen} />
        <NavbarButtons setActiveScreen={setActiveScreen} />
    </div>
  )
}
