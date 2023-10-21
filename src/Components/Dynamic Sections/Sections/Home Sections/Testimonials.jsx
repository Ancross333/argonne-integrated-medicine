import React, { useState } from 'react'
import axios from 'axios';
import Testimonial from '../../../Dynamic Templates/Testimonial'
import pfp from '../../../../Assets/pfp.jpg'

export default function Testimonials() {

  // const test = axios.get("https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews")
  //   .then(res => {
  //     console.log(res.data);
  //   })
  const testimonials = [
    {
      profilePicture: pfp,
      name: "N Lien",
      review: "I Love this Doc. He does fantastic work adjusting me. Always leave feeling💯 His reception people are always so pleasant and do their jobs perfect. I've never had a bad visit. Grateful. I highly recommend this office."
    },
    {
      profilePicture: pfp,
      name: "Logan Hughes",
      review: "This is my new regular monthly stop. I can't believe how amazing my experience was, genuinely. Between the kind front desk members, to the personable and professional Docs, this office is a must. Doctor J. Goldfeldt took the time to listen to my habits, then took extra time to tend to my concerns. Doc then took a moment to explain what he was doing and how'd I'd feel going and coming out of it. I just can't believe I've never had this done before because now I can't imagine never not doing this regularly. It was extremely affordable, to the point where I'd happily pay twice as much for that level of care. If you're seeing this; I thank you, to the moon and back, for my experience. A patient for life."
    },
    {
      profilePicture: pfp,
      name: "Jayne Edens",
      review: "Their is to help you feel your best!  They listen to your concerns, pains and discomforts and show you exercises that can help improve quality of life. They are friendly and caring from the front desk to the massage table! And of course Dr. John's Chiropractic table!  I appreciate the care I received at Argonne Family!"
    },
    {
      profilePicture: pfp,
      name: "Daryl Williams",
      review: "Always feel welcome and appreciated. Dr John always listens to and addresses my issues with genuine care and concern. He goes the extra mile plus. Would not want to go anywhere else."
    },
    {
      profilePicture: pfp,
      name: "Nancy Springer-Smith",
      review: "I have known Dr. John for many years. He's not just my Chiropractor but, he is also my friend. I woudn't let anyone else give me my adjustment's! Love you Dr. John your the best!"
    },
    {
      profilePicture: pfp,
      name: "Debbie Stanfield",
      review: "Dr. John and his staff are not only professional, caring and consistent, he has taken me from a wheelchair, chronic pain all over my muskular skeletal system, to walking and healthy. Digestively, neck, bulging dics, SI Joint, hand pain, foot pain to minimal pain. My circulatory system is healthy and symptoms of ulcers, upset stomach are gone. I have been a patient of his for 21 years."
    },
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonial = (index) => (
    <Testimonial
      key={index}
      profilePicture={testimonials[index].profilePicture}
      name={testimonials[index].name}
      review={testimonials[index].review}
    />
  );

  return (
    <div className="testimonials-container">
        <button className="arrow-button" onClick={prevTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <div className="testimonials-viewport">
            {window.innerWidth > 768 ? getTestimonial(currentIndex) : null}
            {getTestimonial((currentIndex + 1) % testimonials.length)}
            {window.innerWidth > 768 ? getTestimonial((currentIndex + 2) % testimonials.length) : null}
        </div>
        <button className="arrow-button" onClick={nextTestimonial}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
  );
}
