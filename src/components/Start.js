import React from 'react'

import image from '../images/nextButton.png';


function Start() {
  return (
    <>
          <div className="bg">
         <div className="head">
          <h1>Grain Bin <br></br> Volume Calculator</h1>
         </div>,

        <div>
          <button className="btn-b" id="myButton" onclick="toggleText()" > <img src={image} height={30} width={30} /> </button>
         </div>

 
       <div className="card" id="pol">

        <h2>Select Bushel Type</h2>
         <div className="card-body">
           <div className="radios">
             <button className="btn-1">Avery Bushe Canada<input className="radio-1" type="radio" value="yes" name="select" /> </button>
              <button className="btn-2">Winchester Bushel United States<input className="radio-2" type="radio" value="no" name="select" /> </button>
            <button className="btn-3">Continue</button>
          </div>
         </div>

        </div>

     </div>
    </>
  )
}

export default Start