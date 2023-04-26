import Image from "../../scam-alert.png";
import { useLocation } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";

function ProductAnswer(props) {

  const location =useLocation();
  const sum =  location.state.param1.questionOne+location.state.param2.questionTwo+location.state.param3.questionThree;
    
  if(sum===3){
    return (
      
      <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount/>
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="d-flex flex-column h-100">
            <h1 className="text-bold">Your result </h1>
            <h4 className="text-muted mb-4">It is a Scam</h4>   
        
            <img
                          className="cover rounded mb-2 me-2"
                          width="160"
                          height="120"
                          alt=""
                          src={Image}
                        />
    
            <div id="alert" className="mb-0"> 
                <h4> What to do Next?</h4>
            </div>

            <p className="lead flex-shrink-0">
              <small>
              Do not share any financial or private information with the person. Call your nearest police station and ask for the next step.
              </small>
            </p>
            </div>
          </div>
        </div>
  
       
      </div>
    );
  }
  else if(sum===2 || sum===1 ){
    return (
      
      <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount/>
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="d-flex flex-column h-100">
              <h1 className="text-bold">Your result </h1>
              <h4 className="text-muted mb-4">It is likely a Scam</h4>     
            <img
                          className="cover rounded mb-2 me-2"
                          width="160"
                          height="120"
                          alt=""
                          src={Image}
                        />
    
              <div id="alert" className="mb-0"> 
                <h4> What to do Next?</h4>
              </div>
            
              <p className="lead flex-shrink-0">
                <small>
                Be cautious on your communication with the person. Do not transfer and share any financial or 
                private information. 
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (

      <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="d-flex flex-column h-100">
            <h1 className="text-bold">Your result </h1>
            <h4 className="text-muted mb-4">Not Scam or not enough information to conclude</h4>     
  
            <div id="alert" className="mb-0"> 
              <h4> What to do Next?</h4>
            </div>
          
            <p className="lead flex-shrink-0">
              <small>
              Always be cautious. Do not transfer and share any financial or private information to an unknown person. 
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
                  
    );
  }
  }
  
  export default ProductAnswer;