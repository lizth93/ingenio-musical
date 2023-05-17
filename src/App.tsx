import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";

import AboutUs from "components/AboutUs";
import Carousel from "components/carousel";
import MoreAboutUs from "components/MoreAboutUs";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <AboutUs />
        <MoreAboutUs />
      </main>
    </div>
  );
}

export default App;
