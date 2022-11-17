import "./App.css";
import Navbar from "./Components/Pages/Shared/Navbar";
import TopSection from "./Components/Pages/TopSection";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import ProductsDetails from "./Components/Pages/ProductsDetails";
import Footer from "./Components/Pages/Shared/Footer";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <div className="scroll-smooth ">
      <TopSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/productDetails/:id" element={<ProductsDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
