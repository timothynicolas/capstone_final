// COMPONENTS

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//CSS

import '../css/about.css';

//MEDIA

import about_user from '../media/about-user.webp';



function About(){

    document.title = "Peekabook | About Us";
    return(
        <div>

            <Navbar/>

            <div class="container my-5 ">
                <div class="row">
                    <div class="container col-12 col-lg-6 ">
                        <h1 class="green-text fw-bold text-center" style={{fontSize:"300%"}}> About Us</h1>
                    </div>

                    <div class="container  col-12 col-lg-6 mb-5">
                        <p class=" h4 text-center">We want to ensure that knowledge is available to anyone who wish to use it to support themselves. We strive to offer a wide range of books on various topics so that you have the most powerful tool accessible right at your hands.</p>
                    </div>
                </div>
            </div>

  
            <div class="container mt-5 ">
                <div class="row d-flex justify-content-center">
                    <div class="container col-10 col-lg-3  mx-4 about-owner mb-5">
                        <center><img class="mt-5" src={about_user} style={{width: "200px"}}/></center>

                        <p class="my-5 px-3 text-center">"I am Chrismae and I want to make sure that everyone, especially the students, have access to the books that they need because it can help them achieve their dreams without breaking the bank"</p>
                    </div>
                    <div class="container col-10 col-lg-3  mx-5 about-owner mb-5">
                        <center><img class="mt-5" src={about_user} style={{width: "200px"}}/></center>

                        <p class="my-5 px-3 text-center">"Hi, I am Paul and I am a book enthusiast. I believe that knowledge and learning should be a right and not a privilege. That is why we came up with this website - for books to be an accessible commodity for everyone!"</p>
                    </div>
                    <div class="container col-10 col-lg-3 mx-4 about-owner mb-5">
                        <center><img class="mt-5" src={about_user} style={{width: "200px"}}/></center>

                        <p class="my-5 px-3 text-center">"My name is Mark and I am a book worm. I spend my free time reading and writing books. My dream is to share to others the joy that I experience when reading books - making this website a reality and haven for readers alike."</p>
                    </div>
                </div>
            </div>

    <br/>
    <br/>

    
    <div class="container text-center my-5">
      <div class="mission">
        <p class="green-text fw-bold text-center h1" style={{fontSize:"300%"}}>Mission</p>
      </div>

      <hr/>
      <br/>

      <div class="text-center my-5">
        <p class="h3">To democratize knowledge by providing an accessible platform for users to purchase books at affordable prices, fostering a culture of learning and empowerment.</p>
      </div>
    </div>

    <br/>

    
    <div class="container text-center my-5">
      <div class="mission">
        <h1 class="green-text fw-bold text-center" style={{fontSize:"300%"}}>Vision</h1>
      </div>

      <hr/>
      <br/>

      <div class="text-center my-5">
        <p class="h3">We envision a future where individuals from all walks of life have equal access to a vast array of knowledge. Our platform not only offers cost-effective books but also empowers users to preserve and share their own knowledge through the conversion of digital content into tangible, cherished books.</p>
      </div>
    </div>

    <br/>
    <br/>
    <br/>
            <Footer/>
        </div>
    )
}

export default About;