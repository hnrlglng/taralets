import React, {useEffect} from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
// Import Images ========================>
import img from '../../Assets/image (2).png'
import img2 from '../../Assets/image (3).png'
import img3 from '../../Assets/image (9).png'
import img4 from '../../Assets/image (10).png'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
 

const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Romantic moments under Eiffel Tower',
    desc: 'with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world’s earliest and greatest civilizations'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Let us have an adventure outside Tunisia.',
    desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Best Country in East Africa',
    desc: 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
  }
]

 const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 


   return (
     <section className='blog container section'>
      <div className="secContainer">
      <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
          Our best blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
          An insight to the incredible experince in the world.
          </p>
 
        </div>

        <div className="mainContainer grid">
           {
            Posts.map(({id, postImage, title, desc})=>{
              return (
                <div key={id} className="singlePost grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="imgDiv">
                  <img src={postImage} alt="Blog post image" />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="2500">{title}</h3>
                  <p data-aos="fade-up" data-aos-duration="3000">{desc}</p>

                  <a href="#" className='flex' data-aos="fade-up" data-aos-duration="3500"> Read More <BsArrowRightShort className="icon"/></a>
                </div>
  
                
              </div>
              )
            })
           }
        </div>
      </div>
      <br></br>
      <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
          HISTORICAL TRIVIA
          </h2>

      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        CORREGIDOR BATAAN
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>The Historic Journey of Corregidor: A Symbol of Valor and Resilience.</strong> Nestled at the entrance of Manila Bay in the Philippines, Corregidor Island stands as a testament to the nation's tumultuous past. Over the centuries, this rocky outpost has witnessed countless chapters of history, from Spanish colonization to World War II. Join us on an accordion-style journey as we unfold the captivating tale of Corregidor's rich and storied past.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        MALOLOS, BULACAN
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Title: Unveiling the Tapestry of Malolos, Bulacan: A Journey Through History.</strong> Nestled in the heart of the Philippines, the historic city of Malolos in Bulacan province unravels a captivating tapestry of the nation's past. From its humble beginnings as a settlement to its pivotal role in the struggle for independence, Malolos weaves together a rich and vibrant history. Join us on an accordion-style expedition as we uncover the layers of Malolos' fascinating story.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        KAWIT, CAVITE
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>Kawit, Cavite: Unveiling the Tapestry of Heritage and Independence.</strong> Nestled along the shores of Manila Bay in the province of Cavite, Philippines, the historic town of Kawit unfolds a captivating tale of heritage and independence. From its humble beginnings as a coastal settlement to its pivotal role in the nation's struggle for freedom, Kawit weaves together a rich tapestry of history. Join us on an accordion-style journey as we explore the layers of Kawit's fascinating past.
      </div>
    </div>
  </div>
</div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Page 1</li>
    <li class="breadcrumb-item"><a href="#">Page 2</a></li>
    <li class="breadcrumb-item"><a href="#">More Pages...</a></li>
  </ol>
</nav>
     </section>
   )
 }
 
 export default Blog