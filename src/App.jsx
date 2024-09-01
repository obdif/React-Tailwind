import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";



function App() {
  return (

    <Router>
    <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              
              <Home />
              <Services />
              <About />
              <Products />
              <Newsletter />
              <MyFooter />
            </>
          } 
        />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
