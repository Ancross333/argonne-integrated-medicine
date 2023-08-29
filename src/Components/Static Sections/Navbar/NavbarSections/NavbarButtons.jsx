import React from 'react';

export default function NavbarButtons({ setActiveScreen }) {
  return (
    <div id='navButtonContainer'>
      <button onClick={(e) => setActiveScreen(e.target.textContent)} className='navButton'>Home</button>
      <button onClick={(e) => setActiveScreen(e.target.textContent)} className='navButton'>Services</button>
      <button onClick={(e) => setActiveScreen(e.target.textContent)} className='navButton'>Staff</button>
      <button onClick={(e) => setActiveScreen(e.target.textContent)} className='navButton'>Patients</button>
      <button onClick={(e) => setActiveScreen(e.target.textContent)} className='navButton'>Contact</button>
    </div>
  );
}
