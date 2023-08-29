import React, { useState } from 'react'
import Testimonial from '../../../Dynamic Templates/Testimonial'
import pfp from '../../../../Assets/pfp.jpg'

export default function Testimonials() {

  const testimonials = [
    {
      profilePicture: pfp,
      name: "Testimonial User 1",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
    },
    {
      profilePicture: pfp,
      name: "Testimonial User 2",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
    },
    {
      profilePicture: pfp,
      name: "Testimonial User 3",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
    },
    {
      profilePicture: pfp,
      name: "Testimonial User 4",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
    },
    {
      profilePicture: pfp,
      name: "Testimonial User 5",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
    },
    {
      profilePicture: pfp,
      name: "Testimonial User 6",
      review: "kj fdgk dfgkjd fgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkjd fgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkjd fgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgk dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgjk dgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj dfgkj gdkd ghdgkhj lfgjh lkjf ghklj dghlkj dfhlkj dfghklj dfhlkj dkghlkj fdghlkj fghlkj dkhjl dghlkj fdklj fdkljdfhlkj dfghlkj dfhlkj fdhlkj fghlkj fghlkj dghlkj dfghlkj dfkhjl df"
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
      <button onClick={prevTestimonial}>&lt;</button>
      <div className="testimonials-viewport">
        {window.innerWidth > 768 ? getTestimonial(currentIndex) : null}
        {getTestimonial((currentIndex + 1) % testimonials.length)}
        {window.innerWidth > 768 ? getTestimonial((currentIndex + 2) % testimonials.length) : null}
      </div>
      <button onClick={nextTestimonial}>&gt;</button>
    </div>
  );
}
