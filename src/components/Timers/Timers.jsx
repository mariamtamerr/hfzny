import React from 'react'
import timers from '../../assets/images/timers.png'

const Timers = () => {
  return (

    <div>
       <div className='timer container mt-5 mb-5' style={{
        // maxWidth:"10px"
       }}>
       <div className='container'>
            <img className='timersImg' src={timers} />
       </div>
      
    </div> 
    </div>
    
  )
}

export default Timers
