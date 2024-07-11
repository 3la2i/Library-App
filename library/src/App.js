import logo from "./logo.svg";
import "./App.css";
import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import Home from "./Componenets/Home";
import About from "./Componenets/About";

import Signup from "./Componenets/Signup";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import ContactUs from "./Componenets/ContactUs";


function App() {
  return (
    <BrowserRouter>
  
      <Header />
      <Home />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
