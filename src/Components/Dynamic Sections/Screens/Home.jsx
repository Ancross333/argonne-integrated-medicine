import React from 'react'
import Hero from '../Sections/Home Sections/Hero'
import Testimonials from '../Sections/Home Sections/Testimonials'

export default function Home() {
  return (
    <div>
        <Hero headerText="Argonne Integrative Medicine" 
        subheaderText="A good subheader and video goes here"
        
        />

        <Testimonials />
    </div>
  )
}
