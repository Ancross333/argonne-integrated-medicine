import React from 'react';
import StaffCard from '../../../Dynamic Templates/StaffCard';

export default function StaffCards({staffMembers}){
  return (
    <div className="staffGrid">
      {staffMembers.map((staff, index) => 
        <div className="card" key={index}>
          <div className="profileImageContainer">
            <img className="profileImage" src={staff.imgSrc} alt={staff.name} />
          </div>
          <div className="textContainer">
            <h2 className="name">{staff.name}</h2>
            <p className="bio">{staff.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

