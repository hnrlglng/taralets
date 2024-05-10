import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import imgA from "../../Assets/boracayph.png";
import imgB from "../../Assets/boracayph1.png";
import imgC from "../../Assets/bgImage.jpg";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imgB} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgA} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgC} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
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
        </div>

        
      </div>
      
    </section>
  );
};

export default Home;
