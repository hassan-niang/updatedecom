import React from 'react'
import "../../Styles/home.css" 
import videobg from "../../video/background.mp4"
const home = () => {
  return (
    <div>
      <main>
  <div className="hero">
    <video loop muted autoPlay preload="auto"
      source src={videobg} type="video/mp4" />
    <div className="caption">
      <a href="/shop">
        <h1>Jutori Seil</h1>
      </a>
      <h2>Design With You In Mind</h2>
      <h3>Create Your Custom Gold Pieces and Grillz</h3>
      <a href="/shop">
        <button>Start Creating</button>
      </a>
    </div>
  </div>
</main>


    </div>
  )
}


export default home
