import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart(){
  document.title = "Peekabook | Cart";
    return(
        <div>
            <Navbar/>

            <div className="container my-5">

    <div className="row d-flex justify-content-center">

      <div className="col-10 col-lg-7 d-flex align-items-center justify-content-center flex-wrap" id="cart-items">

        <i className="fa-solid fa-cart-shopping fa-bounce fa-8x" style={{color: "#ffffff"}}></i>
        
        <br/>

        <p className="text-center h4 px-5">No items in your cart yet. Browse our Library to pick from our vast variety of books.</p>

      </div>

      

      <div className=" col-10 col-lg-5">
        <p className="h1 fw-bold text-center mb-5">Your Cart</p>

        <div className="row">
          <div className="col-6" id="cart-entries">

           

          </div>

          <div className="col-6" id="cart-prices">

            

          </div>
        </div>

        <hr/>
        
        <div className="row">
          <div className="col-6" id="cartnum-items">

            <p> Items(0):</p>
            
          </div>

          <div className="col-6" id="sub-total">

            <p className="text-end"> ₱ 0 </p>
           
          </div>
        </div>

        <div className="row">
          <div className="col-6">

           
            <p> Estimated Tax (4%)</p>

          </div>

          <div className="col-6" id="tax_div">

            <p className="text-end"> ₱ 0 </p>

          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-6" id="grand-total">

            <p> Grand Total:</p>
           
          </div>

          <div className="col-6" id="grandtotal_div">

            <p className="text-end" id="final-total"> ₱ 0 </p>
            
          </div>
        </div>  
        
        <a href="#" className="btn btn-success signup-btn w-100 my-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout </a>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">Success!</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-black">

                Thank you for choosing Pickabook! We hope to see you again!

              </div>
              <div className="modal-footer">
                
                <button type="button" className="btn btn-success signup-btn" data-bs-dismiss="modal" onclick="clearCart()">Back to Home</button>
              </div>
            </div>
          </div>
        </div>

      </div> 
      
    </div>
     
  </div>

            <Footer/>
        </div>
    )
}

export default Cart;