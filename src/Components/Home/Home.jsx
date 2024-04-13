import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import imgA from '../../Assets/boracayph.png';
import imgB from '../../Assets/boracayph1.png';
import imgC from '../../Assets/bgImage.jpg';
 const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
   return (
    <section className='home'>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgB} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgA} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imgC} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Plan Your Trip With TARALETSPH
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
           "Taralets PH: Where Every Journey Finds Its Perfect Stay."
           </p>
           <button data-aos="fade-up" data-aos-duration="3000" className="btn btn-dark">
  <a href="#">Explore Now</a>
</button>
        </div>

        <div  className="homeCard grid">
           <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder='Dream Destination'/>
           </div>
           <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder='11/Meters'/>
           </div>
           <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Price Range</label>
              <input type="text" placeholder='$140-$500'/>
           </div>
           <div className="buttonContainer" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Search</button>
    <button data-aos="fade-up" data-aos-duration="3000" className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> Filter</button>
  </div>
        </div>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filter Search</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      CLick the dropdown to select filter categories.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Categories
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Car Rental</a></li>
        <li><a class="dropdown-item" href="#">Flight Booking</a></li>
        <li><a class="dropdown-item" href="#">Accomodations</a></li>
      </ul>
    </div>
  </div>
</div>
    </section>
   )
 }
 
 export default Home