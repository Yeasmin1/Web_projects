import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Admission } from "./components/admission";
import { Research } from "./components/research";
import { News } from "./components/News";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Admission data={landingPageData.Admission} />
      <Research data={landingPageData.Research} />
      <News data={landingPageData.News} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
