import React from 'react'
import Home from '../Screens/Home';
import Services from '../Screens/Services';
import Staff from '../Screens/Staff';
import Patients from '../Screens/Patients';
import Contact from '../Screens/Contact';

export default function MainContent({activeScreen}) {

    

  return (
    <div>
        {activeScreen === "Home" && <Home />}
        {activeScreen === "Services" && <Services />}
        {activeScreen === "Staff" && <Staff />}
        {activeScreen === "Patients" && <Patients />}
        {activeScreen === "Contact" && <Contact />}
    </div>
  )
}
