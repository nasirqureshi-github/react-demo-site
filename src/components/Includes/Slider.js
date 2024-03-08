import React from 'react'
import sliderImg1 from '../Images/slider-img-1.jpg'
import sliderImg2 from '../Images/slider-img-2.jpg'
import sliderImg3 from '../Images/slider-img-3.jpg'
const Slider = () => {
  return (
<div>


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="4000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sliderImg1 } class="d-block slider-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sliderImg2} class="d-block slider-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sliderImg3 } class="d-block slider-img " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon next-icon"  aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>
  )
}

export default Slider