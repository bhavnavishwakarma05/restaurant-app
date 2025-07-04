  import React from "react";
  import './assets/css/style.css';
  import Navbar from "./components/Navbar";
  import Home from "./components/Home";
  import About from "./components/About";
  import Menu from "./components/Menu";
  import Product from "./components/Product";
  import Review from "./components/Review";
  import Contact from "./components/Contact";
  import Blog from "./components/Blog";
  import Footer from "./components/Footer";
  // import App from "./src/App";

  const App = () => {
    return(
      <>
      <Navbar /> 
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />
      </>
    );
  };
  
  export default App;
