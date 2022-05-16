import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import About from './components/pages/About/About';
import Home from './components/pages/home/home';
import Services from './components/pages/Service/Services';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About />}></Route>

        </Routes>
        <Footer />
      </Router>


    </div>);

}

export default App;
