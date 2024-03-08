import React from 'react'
import Slider from '../Includes/Slider';
import { Link } from 'react-router-dom';
import Services1 from '../Images/general-trading.jpg'
import Services2 from '../Images/import.jpg'
import Services3 from '../Images/export.jpg'

import MV from '../Includes/MV';
const Home = () => {
  return (

    <div>
 <Slider/>
 <section className='home'>
  <div className="container ">
 <div className="row">

 <div className="col-lg-12 text-center">
 <h3>About The Company</h3>
 <div className='underline mx-auto'></div>
<p>Marahi Company Ltd, established more than 5 years back, has a rich history of key project milestones. From its humble beginnings, the company has evolved into a dynamic and reputable player in the field of general trading and contracting in Al Jubail, Saudi Arabia.</p>
 <Link to="/About" className='btn btn-warning shadow readMore-btn'>Read More</Link>
 </div>
 </div>
  </div>
 </section>


{/* Misson & visions */}

<MV/>


 {/* Services section */}
 <section className='services-section '>
 <div className="container">
 <div className='row'>
<h3 className='text-center pb-3 '>Our services </h3>

 <div className="col-lg-4  col-md-6 mt-4 ">
<div className='card shadow'>
<img src={Services1} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>General Trading</h6>
<p>Importing, exporting, and trading a diverse range of goods and materials. Marahi Company Ltd specializes in the dynamic field of general trading, serving as a reliable hub for importing, exporting, and trading a diverse range of goods and materials.</p>
<Link to="/Services" className='btn btn-link readMore-btn'>Read more</Link>
</div>
</div>
 </div>

  
 <div className="col-lg-4  col-md-6 mt-4">
<div className='card shadow'>
<img src={Services2} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>Importing</h6>
<p>We excel in sourcing high-quality products from around the world to meet the diverse needs of our clients. Our comprehensive import services ensure a seamless flow of goods, encompassing meticulous documentation, customs clearance, and efficient logistics.</p>
<Link to="/Services" className='btn btn-link readMore-btn'>Read more</Link>
</div>
</div>
 </div>


 <div className="col-lg-4 col-md-6 mt-4 ">
<div className='card shadow'>
<img src={Services3} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>Exporting</h6>
<p>As an exporter, Marahi takes pride in showcasing the excellence of Saudi products to the global market. We are committed to promoting the reputation of Saudi goods and contributing to the country’s economic growth.</p>
<Link to="/Services" className='btn btn-link readMore-btn'>Read more</Link>
</div>
</div>
 </div>

  </div>
  </div>
</section>

    </div>
  )
}

export default Home;