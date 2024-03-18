/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerCare from "./components/CustomerCare";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<Home />} />
          <Route path="/care" element={<CustomerCare />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
