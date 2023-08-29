import React from 'react'
import '../../../CSS/Main Content/Patients/Patients.css'
import PatientHeader from '../Sections/Patient Sections/PatientHeader'
import PatientForms from '../Sections/Patient Sections/PatientForms'
import PatientFooter from '../Sections/Patient Sections/PatientFooter'

export default function Patients() {
  return (
    <div>
        <PatientHeader />
        <PatientForms />
        <PatientFooter />
    </div>
  )
}
