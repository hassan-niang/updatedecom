import "../src/App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Footer from "./components/footer.jsx"
import Home from "./components/pages/home.jsx"
import Product from "./components/pages/product.jsx"
import Contact from "./components/pages/Contact.jsx"
import About from "./components/pages/About.jsx"
import Login from "./components/pages/login.jsx"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Shop" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
