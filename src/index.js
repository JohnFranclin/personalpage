import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coding from "./pages/Coding";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Me from "./pages/Me";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="App font-mono bg-amber-200">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Me />} />
                  <Route path="/aboutme" element={<AboutMe />}/>
                  <Route path="/coding" element={<Coding />}/>
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </BrowserRouter>
      </div>
  </React.StrictMode>
);
