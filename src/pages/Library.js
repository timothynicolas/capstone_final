//COMPONENTS


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//JAVASCRIPT

import '../javascript/library.js';



function Library(){
    return(
        <div>
            <Navbar/>
            <div className="container ">

                <p className="h1 my-5" style={{fontWeight: "bold"}}>Best Sellers</p>


                <div className="row">
                <div id="book-list" className="container d-flex flex-wrap justify-content-around ">

                    

                    
                
                </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Library;