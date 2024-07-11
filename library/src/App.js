import logo from "./logo.svg";
import "./App.css";
import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import Main from "./Componenets/Home";
import About from "./Componenets/About";

import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import ContactUs from "./Componenets/ContactUs";
import Signup from "./Componenets/Signup";


function App() {
  return (
    <BrowserRouter>
    <routes>
      <Header />
      <Signup/>
      <Footer />
      </routes>
    </BrowserRouter>
  );
}

export default App;
