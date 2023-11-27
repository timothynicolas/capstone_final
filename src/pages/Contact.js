//COMPONENTS

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [concern, setConcern] = useState("");

    let submitConcern = () => {
     //console.log(email);
        setEmail("");
        setName("");
        setConcern("");
    }
    document.title = "Peekabook | Contact Us";

    return(
       
        <div>
            <Navbar/>
                <div className="container col-10 mt-5 p-4 pt-0">
                    <div className="row justify-content-center"> 
                    <div className="col-lg-6"> 
                        <br/>
                        <p className="h1 text-white text-center" style={{fontWeight: "700"}}> How can we help?</p>
                        <hr/>

                        <div className="mb-3">
                            <label  className="form-label text-white">Full Name:</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e)=> {setName(e.target.value)}}  />
                        </div>

                        <div className="mb-3">
                            <label  className="form-label text-white">Email Address:</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}   />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Tell us about it:</label>
                            <textarea className="form-control" id="concern" rows="3" value={concern} onChange={(e)=> {setConcern(e.target.value)}}  ></textarea>
                        </div>
                        <button className="btn btn-success signup-btn w-100 mt-1 green-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={submitConcern}>Submit</button>
                        
                    </div>
                    </div>
                 </div>

    
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
    <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color:" #010100"}}>Success!</h1>
    <button type="button" className="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
    </div>
    <div className="modal-body" style={{color:"#010100"}}>
    Your feedback has been sent. One of our representatives will reach out to you shortly via email. 
    </div>
    <div className="modal-footer">
    
    <button type="button" className="btn btn-success signup-btn green-btn" data-bs-dismiss="modal" >Okay</button>
    </div>
    </div>
    </div>
    </div>
   

  

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
            <Footer/>
    </div> 
    )
}

export default Contact;