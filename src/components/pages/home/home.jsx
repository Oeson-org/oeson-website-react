
import React from 'react';
import Mainsec1 from './mainsec1.jsx';
import Ourservices from './ourservices.jsx';
import Whychooseus from './whychooseus.jsx';
import Cards from './Cards.jsx';
import Aboutus from './aboutus.jsx';
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import './home.css';

function Home() {
  return (
    <div>
      <Header /> 
      <Mainsec1 />
      <Ourservices /> 
       <Whychooseus/>
      <Cards />
      <Aboutus />
<Footer/>

    </div>);

}

export default Home;

