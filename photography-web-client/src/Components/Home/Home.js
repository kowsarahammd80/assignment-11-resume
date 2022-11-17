import React from 'react';
import { Link } from 'react-router-dom';
import Party from '../Party/Party';
import Services from '../Services/Services';
import UseTitle from '../Title/Title';

import Together from '../Together/Together';
import HomeBanner from './HomeBanner';

const Home = () => {
   
  UseTitle("Home")

  return (
    <div>
        
       <HomeBanner></HomeBanner>
    
       <div>
              <Services len={3}/>
              <div className='text-center mb-5'>
               <Link to='/services'>
                 <button className='bg-dark text-light px-3 py-2 rounded-2 '>Show All Service</button>
               </Link>  
              </div>  
               
          </div> 

       

        <div>
          <Together></Together>
        </div>

        <div className='container'>
          <Party></Party>
        </div>

         
    </div>
  );
};

export default Home;