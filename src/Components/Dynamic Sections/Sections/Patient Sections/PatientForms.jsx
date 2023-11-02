import React from 'react';
import PatientForm from './PatientForm';
import DownloadIcon from '../../../../Assets/Icons/Download.png'
import Clipboard from '../../../../Assets/Icons/clipboard.png'

export default function PatientForms() {
  return (
    <div id='patientFormsContainer'>
      <PatientForm
        header='New Patient Intake'
        caption='Submit this packet of forms online. Click here to begin'
        href="https://intake.mychirotouch.com/?clinic=AFC0052"
        icon={DownloadIcon}
        clipboardIcon={Clipboard}
      />
      <PatientForm
        header='Minor Consent Form'
        caption='When we treat your child, this form is required. For legal guardians only.'
        href="http://argonnechiropractic.com/wp-content/themes/afc-theme/assets/forms/argonne-patient-minor-consent.pdf"
        icon={DownloadIcon}
        clipboardIcon={Clipboard}
      />
    </div>
  );
}
