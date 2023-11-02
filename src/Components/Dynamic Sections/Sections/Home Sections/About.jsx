import React from 'react';
import help from '../../../../Assets/owners.jpg'
export default function About() {
  return (
    <div className='styledContainer'>
      <div className='textContainer'>
        <div className='title'>
        ABOUT US:
        </div>
        <div className='content'>
            Argonne Integrative Medicine (AIM)in Spokane, Washington, is a fully integrated medical clinic specializing in physical rehabilitation and functional medicine.  At Argonne Integrative Medicine we aim to provide compassionate, comprehensive care that integrates new and traditional medical therapies with alternative and complementary approaches.   Our talented team of experienced health care practitioners led by Dr. Mark Whitman MD and Dr. John Goldfeldt DC work together to meet the unique needs of each patient.  By using the latest evidence-based treatments and equipment, we are able to  take a more in-depth look at the underlying problems causing symptoms.    Through this team effort our healthcare professionals have achieved success after success with their patients.
            <br /><br />
            The individual patient care that the Argonne Integrative Medicine clinic provides is what makes the practice unique. Caring for patients suffering from neck pain, back pain, shoulder pain, and/or knee pain, the interdisciplinary team helps them regain their health, as well as a full life with safe, lasting results.
            <br /><br />
            Argonne Integrative Medicine is a pioneer in the rehabilitation and relief of pain using natural, non-surgical means, including functional medicine, chiropractic care, rehabilitation, massage, and wellness services.  We AIM to make you better. 
        </div>
      </div>
      <div className='imageContainer'>
        <img src={help} alt='Dr. John Working with a Customer' />
      </div>
    </div>
  );
}
