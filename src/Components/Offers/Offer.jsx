import React, {useEffect} from 'react'
import './offer.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdKingBed} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdBathtub} from 'react-icons/md'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'


// Images ======================>
import img8 from '../../Assets/sogo.png'
import img7 from '../../Assets/monaco.png'
import img6 from '../../Assets/sghot.jpg'
// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
 
  {
  id:1,
  imgSrc: img8,
  destTitle: 'Hotel SOGO Baguio',
  location: 'Baguio City',
  price: 'P699 for 24hrs'
  },

  {
  id:2,
  imgSrc: img6,
  destTitle: 'Guanajuato',
  location: 'El Nido, Palawan',
  price: 'P1,429/night'
  },

  {
  id:3,
  imgSrc: img7,
  destTitle: 'Monaco Suites de Boracay',
  location: 'Boracay,Aklan',
  price: 'P1,800/night',  
  },

]

 
 const Offer = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, []) 


   return (
     <section className='offer section container'>
      <div className="secContainter">

        <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
          <h2 className='secTitle'>
          Special Offers
          </h2>
          <p>
          From historical cities to natural specteculars, come see the best of the world!
          </p>
 
        </div>

        <div className="mainContent grid">
          {/* Single Offer from the map Array */}

          {
            Data.map(({id, imgSrc, destTitle, location, price })=>{
              return (
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle} />

             <span className="discount">
              69% Off
             </span>
            </div>

              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price}
                  </h4>
                  <span className="status">
                    Available
                  </span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                      <MdKingBed className="icon"/>
                      <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                      <MdBathtub className="icon"/>
                      <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                      <FaWifi className="icon"/>
                      <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon"/>
                      <small>Shuttle</small>
                  </div>
                </div>
                
                <div className="location flex">
                    <MdLocationOn className="icon"/>
                   <small> {location}</small> 
                </div>

                <button className='btn flex'>View Details <BsArrowRightShort className='icon'/></button>

              </div>
            </div>
              )
            })
          }

        
           
        </div>
      </div>
     </section>
   )
 }
 
 export default Offer