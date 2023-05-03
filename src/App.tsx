import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/layout/Navbar";
import Carousel from "components/carrousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
