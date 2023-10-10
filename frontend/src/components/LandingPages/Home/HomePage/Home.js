import React from 'react';

import './Home.css';
import Mid from '../MiddleSection/MiddleSection';
import Carousel from '../Carousel/Carouselhp';
import HomeBottom from '../HomeBottom/HomeBottom';
// import CountdownTimer from '../Countdown/Countdown';


function App() {
  
  return (

      <div className='sctn'>
      <div className='bg'>
          
          <Carousel />
        </div>
        <div className="hehe">
          
          <div>
            <Mid />
          </div>
          <div>
            <HomeBottom />
            {/* <CountdownTimer/> */}
          </div>
        </div>
      </div>
   
  );
}

export default App;
