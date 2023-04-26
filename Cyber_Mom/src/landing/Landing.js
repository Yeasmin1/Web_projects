
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



export const Landing= (props) => {
  return (
    
    <>
      <ScrollToTopOnMount />
      <div className="container pb-5 px-lg-2">
      
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2   ">
           {props.data
             ? props.data.map((d, i) => (
                 <div key={`${d.name}-${i}`} >
                           <div className="col">
                                <div className="row">
                                  <div className="col">
                                        <div className="card shadow-lg">
                                          
                                            <div className="card-body" style={{ height:200 }}>
                                        
                                              <h4 className="card-title text-center">{d.title}</h4>
                                              <p className="card-text text-center text-muted">{d.text}</p>
                                              <div className="d-grid gap-2 justify-content-center">
                                                
                                                <Link to="/products/1" className="btn btn-custom" >
                                                      Check here

                                                </Link>
                                              </div>
                                             
                                          </div>

                                      </div>
                                  </div>
                                </div>
                            </div>
                 </div>
                       
                 ))
            : 'loading'}
        </div>
        <div>
          <div id="description" className="d-flex flex-column py-5">
             <h2 className="text-center mb-3">You are the next target</h2>
             <div className="d-flex text-center">
               <h5 className="text-center mb-3">Many considers, human factor as the weakest link to security. Identify and fix your weaknesses before the attacker finds out.</h5>
              </div>
          </div>
          
          </div>

        
      </div>
       
      <div className="d-flex flex-column bg-white py-5">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
   
  );
}

export default Landing;
