import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      
  <section className='py-4 bg-info'>
    <div className='container'>
    
      <div className='row'>
    <div className='col-lg-4'>
    <h4>Contact us</h4>
    </div>
    
    <div className='col-md-8 mx-auto  about'>
    <h5 className='float-end'>
    <Link to="/" className="breadcrumb">Home</Link>/Contact
    </h5>
    
    </div>
      </div>
    </div>
        </section>



      <section className='contact'>
      <div className='container'>
      <div className='card shadow' >
       <div className='card-body'>

        <div className='row'>

          <div className='col-lg-6'>
            <h3>Contact Form</h3>
            <hr />
            <div className='form-group'>
            <label for="" className='mb-1'>Full Name</label>
              <input type="text" className='form-control' placeholder='Enter fullname'/>

              <div className='form-group'>
              <label for="" className='mb-1'>Phone Number</label>
              <input type="text" className='form-control' placeholder='Enter phone number'/>
             </div>

            <div className='form-group'>
              <label for="" className='mb-1'>Email Address</label>
              <input type="text" className='form-control' placeholder='Enter email'/>
             </div>

              <div className='form-group'>
              <label for="" className='mb-1'>Message</label>         
            <textarea  rows="3" className='form-control' placeholder='Enter your message'></textarea>
            </div> 

            <div className='form-group py-3'>     
            <button type='button' className='btn btn-primary shadow w-100'>Submit</button>
            </div> 

            </div>
          </div>

          <div className='col-lg-6 border-start'>
          <h1>Address Information</h1>
          <p >Phone: +236 13 043 7999 </p>
         <p>Co. Email: agt@gmail.com</p>
          <p>Location: Po Box-300858 Al-31951  United Kingdom .</p>
          </div>
        </div>

</div>
        </div>
        </div>
      </section>
        </div>
  )
}

export default Contact;