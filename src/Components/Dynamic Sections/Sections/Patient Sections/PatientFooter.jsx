import React from 'react'
import Line from '../../../Static Sections/Prefabs/Line'

export default function PatientFooter() {
  return (
    <div id='patientFooterContainer'>
        <div id='patientFooterLine'>
            <Line color='#A9CE6E' />
        </div>
    
        <h2 className='patientHeader'>Insurance Information</h2>
        <p className='patientCaption fourtybottom'>For detailed information, please call our office and speak with our Staff.</p>
        <p className='sixteenp'>We accept most insurances, as well as Visa, MasterCard, Care Credit, and Flex / HSA spending accounts.</p>
    </div>
  )
}
