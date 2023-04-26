import { useState } from "react";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { Link, Router } from "react-router-dom";

function ProductDetail() {
  const [questionOne, setQuestionOne]= useState(0);
  const [questionTwo,setQuestionTwo ]= useState(0);
  const [questionThree, setQuestionThree]= useState(0);

  return (
    
    
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">Romance Scam</h2>
            <h4 className="text-muted mb-4">Identify if you are a victim of Romance Scam</h4>

             {/* Questions code here */}

             <p className="lead flex-shrink-0">
            <span>Have you always meet the person remotely?</span>

            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion1" id="flexRadioDefault1 "onClick={() => setQuestionOne(1)}/>
            <label className="form-check-label" for="flexRadioDefault1">
            Yes
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion1" id="flexRadioDefault2"onClick={() => setQuestionOne(0)} />
            <label className="form-check-label" for="flexRadioDefault2">
            No
            </label>
            </div>
            </p>

            <p className="lead flex-shrink-0">
            <span>Did the person ask for a finiancial help for an emergency?</span>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion2" id="flexRadioDefault1" onClick={() => setQuestionTwo(1)}/>
            <label className="form-check-label" for="flexRadioDefault1">
            Yes
            </label>
            
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion2" id="flexRadioDefault2"onClick={() => setQuestionTwo(0)} />
            <label className="form-check-label" for="flexRadioDefault2">
            No
            </label>
            </div>
            </p>

            <p className="lead flex-shrink-0">
            <span>Did the person ask to send/route money to a foreign country?</span>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion3" id="flexRadioDefault1" onClick={() => setQuestionThree(1)}/>
            <label className="form-check-label" for="flexRadioDefault1">
            Yes
            </label>
            {console.log(questionThree)}
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioQuestion3" id="flexRadioDefault2" onClick={() => setQuestionThree(0)}/>
            <label className="form-check-label" for="flexRadioDefault2">
            No
            </label>
            {console.log(questionThree)}
            </div>
            </p>

                {/* Questions code ends here */}
             
            <div className="row g-3 mb-4">
              <div className="col">
              
                <Link to={{pathname:"/products/answer",state:{ param1:{questionOne},param2:{questionTwo},param3:{questionThree}}}||'/'} className="btn btn-outline-dark py-2 w-100">
                Check
                </Link>
              
              </div>
             <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Reset
                </button>
              </div>
            </div>

            
            <h4 className="mb-0">What is Romance Scam?</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              A Romance Scam starts with gaining trust by exploiting you emotionally. Ultimately, the scammer asks the 
              victim for money, receives it, and vanishes.
              </small>
            </p>
          </div>
        </div>
      </div>

     
    </div>
    
    
  );
  
}

export default ProductDetail;
