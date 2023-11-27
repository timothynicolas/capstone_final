//COMPONENTS

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//CSS

import '../css/home.css'

// MEDIA

import testimonial1 from "../media/testimonial01.png";
import testimonial3 from "../media/testimonial03.png";
import testimonial4 from "../media/testimonial04.png";



function Home(){

    document.title = "Peekabook | Home";
    return(
        <div>
            <Navbar/>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-primary">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold green-text">Knowledge doesn't have to be expensive.</h1>
      <h3 className="fw-normal mb-3 text-white" id="quote">Random Quote from Custom API here</h3>
      
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  

  <div className="container text-center">

    <div className="services">
      <h1 className="my-5">Our Services</h1>
    </div>

    <hr/>
    <br/>
    <br/>

    <div className="row align-items-start">
      <div className="col">
        <i className="fas fa-universal-access fa-3x" style={{color: "#1ed760"}}></i>
        <p>Accessible Learning</p>
      </div>
      <div className="col">
        <i className="fas fa-truck fa-2x" style={{color: "#1efa60"}}></i>
        <p>Fast <br/> Delivery</p>
      </div>
      <div className="col">
        <i className="fas fa-search fa-2x" style={{color: "#1efa60"}}></i>
        <p>Discover new books</p>
      </div>
      <div className="col">
        <i className="fas fa-file-export fa-2x" style={{color: "#1efa60"}}></i>
        <p>Upload <br/> your files</p>
      </div>
      <div className="col">
        <i className="fas fa-book fa-2x" style={{color: "#1efa60"}}></i>
        <p>Easy bookbinding</p>
      </div>
      <div className="col">
        <i className="far fa-user-circle fa-2x" style={{color: "#1efa60"}}></i>
        <p>Personal information</p>
      </div>
      <div className="col">
        <i className="fas fa-hand-pointer fa-2x" style={{color: "#1efa60"}}></i>
        <p>Wide variety of book genres</p>
      </div>
      <div className="col">
        <i className="fas fa-percentage fa-2x" style={{color: "#1efa60"}}></i>
        <p>Discounted <br/> Items</p>
      </div>
    </div>
  </div>

  <br/>
  <br/>

  

  <div className="container text-center">

    <div className="services">

      <hr/>

      <h1 className="mt-5">Hear from our Clients</h1>

      <br/>
      <br/>
    
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={testimonial1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>April Garcia</h5>
              <p>"I love it! The print quality and image are tops! I am on my 5th printing for my academic books."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={testimonial3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Sophia Cruz</h5>
              <p>"The shipment was so fast. I got my books before the exams so I am very thankful. I also availed their bookbinding for our group thesis and our teachers commended us for the great quality. This is my new favorite book shop."</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={testimonial4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Edward Holland</h5>
              <p>"I have requested to have my work bookbound. It was my gift for my sister's birthday and it turned out so good. They even asked me where I got it. I also ordered some of her favorite books that I actually cannot find on a typical bookstore. Thanks!"</p>
            </div>
          </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


     </div>
    
  </div>

            <Footer/>
        </div>
    )
}

export default Home;