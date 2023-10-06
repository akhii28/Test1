import './App.css';

//import F1 from './components/F1.js';
import {Nav} from './components/Nav.js';
import { Home,About,Blog} from './components/F2.js';
import Contact from "./components/Contact.js";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import{HashRouter, Routes, Route} from "react-router-dom";
//Hash router needs # in address bar

function App() {
  return (
    <div>
      {/*<Nav /> */}
      {/*<F1/>*/}

      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> {/* http://localhost:3000/#/about */}
          <Route path="/blog" element={<Blog />} />   {/* http://localhost:3000/#/blog */}
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
