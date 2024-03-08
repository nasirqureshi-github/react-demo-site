import React from 'react'
import MV from '../Includes/MV';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
    
  <section className='py-4 bg-info'>
    <div className='container'>
    
      <div className='row'>
    <div className='col-lg-4'>
    <h4>About us</h4>
    </div>
    
    <div className='col-md-8 mx-auto  about'>
    <h5 className='float-end'>
    <Link to="/" className="breadcrumb">Home</Link>/About
    </h5>
    
    </div>
      </div>
    </div>
        </section>
 


 <section className='about py-4'>
<div className='container'>
  <div className='row'>
  <h3>About The Company</h3>
  <p>Marahi Company Ltd, established more than 5 years back, has a rich history of key project milestones. From its humble beginnings, the company has evolved into a dynamic and reputable player in the field of general trading and contracting in Al Jubail, Saudi Arabia.</p>
</div>
</div>
 </section>

{/* Misson & visions */}
<MV/>


  </div>
  )
}

export default About;