import React from 'react'

export default function PatientForm({header, caption, href}) {
  return (
    <a rel="noopener noreferrer" target='_blank' href={href} className='patientFormContainer'>
        <div className='patientFormTextContainer'>
            <h4>{header}</h4>
            <p>{caption}</p>
        </div>
        <div className='formRedirectIcon'>
          Stuffy
        </div>
    </a>
  )
}
