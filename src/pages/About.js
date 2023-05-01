import React from 'react'
import Burger from '../assets/pexels-polina-tankilevitch-4109130.jpg'
import '../styles/about.css'
function About() {
  return (
    <div className='about'>
      <div className='Top'style={{ backgroundImage: `url(${Burger})` }}></div>
      <div className='Bottom'>
      <h1> ABOUT US</h1>
        <p>
        Extraordinary FOOD COMES FIRST

Consistently, in excess of 11 million visitors visit Taste Heavens Burgers eateries around the globe. What’s more, they do as such in light of the fact that our eateries are known for serving astounding, 
incredible tasting, and reasonable Burgers.
Established in 1954, Taste Heavens Burgers ®is the second-biggest fast-food burger 
chain on the planet. The first home of customary burgers, our promise to premium fixings,
 signature formulas, and family-accommodating feasting encounters is the thing that has characterized our 
 image for in excess of 50 fruitful years.
        </p>
      </div>
    </div>
  )
}

export default About
