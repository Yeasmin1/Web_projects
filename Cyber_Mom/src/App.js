import Template from "./template/Template";
import { Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./products/detail/ProductDetail";
import ProductAnswer from "./products/detail/ProductAnswer";
import Landing from "./landing/Landing";
import JsonData from "./data/data.json";
import { useState, useEffect } from "react";
import Intro from "./landing/Intro";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    
    <Template>
      
        <Switch>
      
          <Route path="/"  exact >
              <Intro data= {landingPageData.Intro}/>
              <Landing data= {landingPageData.Services} />  
          </Route>
        
          <Route path="/products/answer">
            <ProductAnswer />
          </Route>
          <Route path="/products/:slug">
            <ProductDetail />
          </Route>
          
  
        
        </Switch>
      
    
    </Template>
    
  );
}

export default App;