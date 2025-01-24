import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App3 from "./App3";
import App1 from "./App1";
// import Home from "./Pages/Home";
// import Header from "./Components/Header/Header";
// import About from "./Pages/About";
// import Conatct from "./Pages/Conatct";
// import Service1 from "./Pages/Service1";
// import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/service" element={<Service1 />} />
    //     <Route path="/contact" element={<Conatct />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <App1 name="John" age="30" />
  );
};

export default App;
