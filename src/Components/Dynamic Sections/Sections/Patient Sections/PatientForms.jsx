import React from 'react'
import PatientForm from './PatientForm'

export default function PatientForms() {
  return (
    <div id='patientFormsContainer'>
        <PatientForm header='Patient Intake Forms' 
            caption='Submit this packet of forms online. Click here to begin' 
            href="https://intake.mychirotouch.com/?clinic=AFC0052"
            />
        <PatientForm header='Minor Consent Form'
            caption='When we treat your child, this form is required. For legal guardians only.' 
            href="http://argonnechiropractic.com/wp-content/themes/afc-theme/assets/forms/argonne-patient-minor-consent.pdf"
            />
    </div>
  )
}
