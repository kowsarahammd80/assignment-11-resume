import React, { useEffect, useState } from 'react';
import PaetyCard from './PaetyCard';
import './Party.css'

const Party = () => {
  const [parties, setParties] = useState([])

  useEffect(() => {
    fetch('party.json')
      .then(res => res.json())
      .then(data => setParties(data))
  }, [])

  return (
    <div className='container mt-5 py-5'>
      <h4 className='text-center mb-3 text-color'>
        AWARDS AND FELICITATIONS
        <br />
        WEDDING PHOTOGRAPHY
      </h4>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {
          parties.map(party => <PaetyCard key={party.id}
            party={party}
          ></PaetyCard>)
        }

      </div>

    </div>
  );
};

export default Party;