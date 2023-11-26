function Footer(){
    return(
        <div>
            <div class="container mt-5">
    <footer class="pt-5">
      <div class="row">
        <div class="col-6 col-md-2 mb-2">
          <h5 class="text-white">Help Center</h5>
          <br/>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Media Center</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Redeem Gift Cards</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Terms of Use</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Corporate Information</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-2">
          <br/>
          <br/>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Investor Relations</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Privacy</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact Us</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Only on Pickabook</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Account</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-2">
          <br/>
          <br/>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Jobs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Ways to Rent</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cookie Preferences</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Speed Test</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Buy Gift Cards</a></li>
          </ul>
        </div>
        
        <div class="col-md-5 offset-md-1 mb-2">
          <form>
            <h5 class="text-white">Subscribe to our newsletter</h5>
            <br/>
            <p class="text-white">Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button type="button" class="btn  signup-btn" data-bs-toggle="modal" data-bs-target="#newsletter" style={{border: "none"}}>
                Subscribe
              </button>

              <div class="modal fade" id="newsletter" tabindex="-1" aria-labelledby="newsletter" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title text-black fs-5" id="exampleModalLabel">Success!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body text-black">
                        You are now subscribed to our newsletter.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary signup-btn" data-bs-dismiss="modal">Okay</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </form>
        </div>

      </div>
        
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">

        <p class="text-white">© 2023 Pickabook, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-facebook text-white" style={{fontSize: "1.5em"}}></i></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-instagram text-white" style={{fontSize: "1.5em"}}></i></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-twitter text-white" style={{fontSize: "1.5em"}}></i></a></li>
        </ul>

      </div>
    </footer>    
  </div>
        </div>
    )
}

export default Footer;
