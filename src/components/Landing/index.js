import React from 'react'
import videoBackground from '../../video/background.mp4'

const Landing = () => (
  <div>
    <h1>WELCOME TO SAMERY</h1>
    <video
      autoPlay
      loop
      muted
      style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1" 
      }}
    >  
    <source src={ videoBackground } type="video/mp4"/>
    </video>
  </div>
)

export default Landing;
