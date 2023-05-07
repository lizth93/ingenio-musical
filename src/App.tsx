import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";

import AboutUs from "components/AboutUs";
import Carousel from "components/carousel";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
