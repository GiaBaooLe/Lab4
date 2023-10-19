import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Main from './components/Main';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';

import 'materialize-css/dist/css/materialize.min.css';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import React from 'react';
function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
  
    <div  className={toggle ? "dark" : "light"}>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
