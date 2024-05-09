import React, {useEffect}  from 'react'
import './about.css'
import customerImg from '../../Assets/customer.png'
import mountainImg from '../../Assets/mountain.png'
import climbingImg from '../../Assets/climbing.png'
import prilaImg from '../../Assets/thomas.png'
import galangImg from '../../Assets/henri.png'
import gonzalesImg from '../../Assets/gonzales.jpg'
import mayanaImg from '../../Assets/mayana.jpg'
import video from '../../Assets/video.mp4'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'

 
 const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  
   return (
     <section className='about  section'>
      <div className="secContainer">
       
        <h2 className='title'>
          About Us?
        </h2>

        <div className="title_team">
        <p align="center">Welcome to TARA LETS, your premier destination for seamless travel <br /> 
          and accommodation services. Established by Group 1 in Web Engineering CPE 4-B,  <br /> 
          our team is dedicated to revolutionising the way you experience travel. <br /> 
          As part of our requirements for the course of Web Engineering at Bulacan State University <br /> 
          we present to you our website named TARA LETS!
          <br /> <br /> 
          At TARA LETS, we believe in the power of technology to enhance your journeys,<br /> 
          making them more convenient, enjoyable, and memorable. With a passion for innovation <br /> 
          and a commitment to excellence, our team works tirelessly to provide you with top-notch services tailored to your needs.
        </p> <br /> <br /> 
        <h1 align="center">MEET THE TEAM</h1><br />
      </div>

      <section className="team">
        <div className="container">
          <div className="row">
            <div class="col-md-3 profile text-center">
            <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
              <div class="img-box">
                <img src={prilaImg} class="img-responsive" alt="" data-aos="zoom-in"/>
                  </div>
                  <h3>THOMAS ANDREW PRILA</h3>
            <p>Team Leader /Developer</p>
            </div>
            
            </div>

            <div class="col-md-3 profile text-center">
            <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
              <div class="img-box">
                <img src={galangImg} class="img-responsive" alt="" data-aos="zoom-in"/>
                  </div>
                  <h3>HENRI LOUIE <br></br>GALANG</h3>
            <p>Business Analyst, CEO</p>
            </div>
           
            </div>

            <div class="col-md-3 profile text-center">
            <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
              <div class="img-box">
                <img src={gonzalesImg} class="img-responsive" alt="" data-aos="zoom-in"/>
                  </div>
                  <h3>MARY JOYCE GONZALES</h3>
            <p>Researcher/ Content Writer</p>
            </div>
            </div>

            <div class="col-md-3 profile text-center">
            <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
              <div class="img-box">
                <img src={mayanaImg} class="img-responsive" alt="" data-aos="zoom-in"/>
                  </div>
                  <h3>KIMBERLY MAE MAYANA</h3>
                  <p>UI/UX Designer</p>
            </div>
            </div>

          </div>
        </div>
      </section>
      </div>


     </section>
   )
 }
 
 export default About