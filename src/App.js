import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import Career from './components/pages/Career/Career';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/home/home';
import Services from './components/pages/Service/Services';
import Jobs from './components/pages/Jobs/jobs';
import Uplode from './components/pages/Uplode/uplode';
import Internship from './components/pages/Internship/internship';
import Blog from './components/pages/Blog/blog';
import Blogintern from './components/pages/Blog-internship/blog-intern';

function App() {
  return (
    <div>
      <Router>

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/uplode' element={<Uplode />}></Route>
          <Route path='/internship' element={<Internship />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
         <Route path='/blog-internship' element={<Blogintern />}></Route>
         </Routes>


      </Router>

    </div>
  );

}

export default App;
