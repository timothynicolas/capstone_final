// MEDIA
import logo from '../media/favicon5.png';

// PACKAGES
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/home">
        
        <img src={logo} alt="medlogo" style={{ height: "50px", width: "50px",  }} />

      </Link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link text-white" to="/home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="library.html">Library</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white " to="cart.html">Cart</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" to="contact.html">Contact Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" to="../index.html">Log Out</Link>
          </li>

         

          
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Attention!</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-black">
                  Are you sure you want to log out?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <Link to="../index.html"><button type="button" class="btn btn-success signup-btn" data-bs-dismiss="modal" onclick="
                    localStorage.clear();
                    sessionStorage.clear();
                    ">Log Out</button></Link>
                </div>
              </div>
            </div>
          </div>
          
        </ul>
      </div>
    </div>
  </nav>

        </div>
    )
};

export default Navbar;