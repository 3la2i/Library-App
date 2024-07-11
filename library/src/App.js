import "./App.css";
import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import Home from "./Componenets/Home";
import About from "./Componenets/About";

import Signup from "./Componenets/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./Componenets/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
