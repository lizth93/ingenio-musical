import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";
import Carrousel from "components/Carrousel";
import AboutUs from "components/AboutUs";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carrousel />
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
