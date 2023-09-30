import React from 'react'
import Navbar from './Home/Navbar/navbar'
import './About.css';


function About() {
  return (
    <div className='bg-success-subtle'>
      <Navbar/>
      <div className="header">
        Travel Diaries
      </div>
      <div className=' container fs-2 fw-bold'>
        Who We Are?
      </div>
    </div>
  )
}

export default About
