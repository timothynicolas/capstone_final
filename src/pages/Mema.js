import Navbar from "../components/Navbar";

function Mema(){
    return(
        
        <div>
           
           <Navbar/>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#samplengadiba">
            Launch demo modal
            </button>


            <div className="modal fade" id="samplengadiba" tabindex="-1" aria-labelledby="samplemodallabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="samplemodallabel">Mama mo title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    tanginang reactjs to ampotangina
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Mema;