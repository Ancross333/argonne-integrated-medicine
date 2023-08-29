import React from 'react';

export default function Testimonial({ profilePicture, name, review }) {
  const stars = new Array(5).fill(null);

  return (
    <div className="testimonial">
      <img src={profilePicture} alt="profile" className="testimonial__profile-pic" />
      <h2 className="testimonial__name">{name}</h2>
      <div className="testimonial__stars">
        {stars.map((_, index) => (
          <svg key={index} className="testimonial__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" width="18px" height="18px"> <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/> </svg>
        ))}
      </div>
      <p className="testimonial__review">{review}</p>
    </div>
  );
}
