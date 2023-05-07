import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";
import Carousel from "components/Carrousel";
import AboutUs from "components/AboutUs";

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
