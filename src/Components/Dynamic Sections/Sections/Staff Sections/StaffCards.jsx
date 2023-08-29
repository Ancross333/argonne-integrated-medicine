import React from 'react';
import StaffCard from '../../../Dynamic Templates/StaffCard';

export default function StaffCards({staffMembers}){
  return (
    <div className="staffGrid">
      {staffMembers.map((staff, index) => 
        <StaffCard 
          key={index} 
          imgSrc={staff.imgSrc} 
          name={staff.name} 
          bio={staff.bio} 
        />
      )}
    </div>
  );
}

