import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile(){
    return(
        <div>
            <Navbar/>
            <div className="container d-flex flex-column justify-content-center col-5 my-5">

                <p className="h2 text-center" style={{fontWeight: "700"}}>Account Information</p>
                <hr/>
                <label> Username:</label><br/>
                <input className="form-control" placeholder="Username"></input><br/>
                <label> Password:</label><br/>
                <input className="form-control" placeholder="Password"></input><br/>
                <label> Email Address:</label><br/>
                <input className="form-control" placeholder="Email Address"></input><br/>
                    
                <p className="h2 mt-5 text-center" style={{fontWeight: "700"}}>Personal Information</p>
                <hr/>
                <label> First Name:</label><br/>
                <input className="form-control" placeholder="First Name"></input><br/>
                <label> Last Name:</label><br/>
                <input className="form-control" placeholder="Last Name"></input><br/>
                <label> Delivery Address:</label><br/>
                <textarea className="form-control" placeholder="Delivery Address"></textarea><br/>

                <button className="btn btn-success signup-btn w-100 mt-2 green-btn" type="button" >Save Changes</button>
                
            </div>
            <Footer/>
        </div>
    )
    
}

export default Profile;