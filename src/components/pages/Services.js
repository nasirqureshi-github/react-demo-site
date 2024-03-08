import React from 'react'
import Services1 from '../Images/general-trading.jpg'
import Services2 from '../Images/import.jpg'
import Services3 from '../Images/export.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>

{/* braedcrumb */}
<section className='py-4 bg-info'>
    <div className='container'>
    
      <div className='row'>
    <div className='col-lg-4'>
    <h4>About us</h4>
    </div>
    
    <div className='col-md-8 mx-auto  about'>
    <h5 className='float-end '>
    <Link to="/" className="breadcrumb"> Home </Link>/Services
    </h5>
    
    </div>
      </div>
    </div>
        </section>





{/* Services section */}
<section className='services-section '>
 <div className="container">
 <div className='row'>
<h3 className='text-center pb-3 '>Our services </h3>

 <div className="col-lg-4 col-md-6 mt-4">
<div className='card shadow'>
<img src={Services1} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>General Trading</h6>
<p>Importing, exporting, and trading a diverse range of goods and materials. Marahi Company Ltd specializes in the dynamic field of general trading, serving as a reliable hub for importing, exporting, and trading a diverse range of goods and materials.</p>

</div>
</div>
 </div>

 <div className="col-lg-4 col-md-6 mt-4 ">
<div className='card shadow'>
<img src={Services2} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>Importing</h6>
<p>We excel in sourcing high-quality products from around the world to meet the diverse needs of our clients. Our comprehensive import services ensure a seamless flow of goods, encompassing meticulous documentation, customs clearance, and efficient logistics.</p>
</div>
</div>
 </div>

 <div className="col-lg-4 col-md-6 mt-4">
<div className='card shadow'>
<img src={Services3} className='w-100 border-bottom' alt="services" />
<div className='card-body'>
<h6>Exporting</h6>
<p>      As an exporter, Marahi takes pride in showcasing the excellence of Saudi products to the global market. We are committed to promoting the reputation of Saudi goods and contributing to the country’s economic growth.</p>
</div>
</div>
 </div>

  </div>
  </div>
</section>

    </div>
    
  )
}

export default Services;