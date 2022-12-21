// import { Link } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Tech from "./components/Tech";

function App() {
  return (
    <div className=''>
      <Navbar />
      <About />
      <Portfolio />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
