import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";
import Carousel from "components/Carrousel";
import AboutUs from "components/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
