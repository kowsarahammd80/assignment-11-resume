import React from 'react';
import './Party.css'

const PaetyCard = ({party}) => {
   
  let {Image, partyName, partyDetail} = party 

  return (
    <div class="col">
      <div class="card border-0">
        <img src={Image} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title font-style fw-bold">{partyName}</h5>
          <p class="card-text">{partyDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default PaetyCard;