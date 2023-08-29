import React from 'react';

export default function StaffCard ({imgSrc, name, bio}){
  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="profileImage"/>
      <h2 className="name">{name}</h2>
      <p className="bio">{bio}</p>
    </div>
  );
}

