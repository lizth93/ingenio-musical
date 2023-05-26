import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";

import AboutUs from "components/AboutUs";
import Carousel from "components/carousel";
import MoreAboutUs from "components/MoreAboutUs";
import MenuProjects from "components/MenuProjects";
import { useState } from "react";
import Contact from "components/Contact";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="App">
      <header>
        <Navbar onSetActiveIndex={handleSetActiveIndex} />
      </header>
      <main>
        <Carousel />
        <AboutUs />
        <MoreAboutUs />
        <MenuProjects
          activeIndex={activeIndex}
          onSetActiveIndex={handleSetActiveIndex}
        />
        <Contact />
      </main>
    </div>
  );
}

export default App;
