import "./App.css";
import Navbar from "./Components/Pages/Shared/Navbar";
import TopSection from "./Components/Pages/TopSection";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import ProductsDetails from "./Components/Pages/ProductsDetails";

function App() {
  return (
    <div className="scroll-smooth ">
      <TopSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductsDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
