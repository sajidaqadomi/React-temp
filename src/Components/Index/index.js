import React from 'react'
import Home from '../Home'
import About from '../About';
import Portfolio from '../Portfolio';
import SocialMedia from '../SocialMedia';
import Work from '../Work';
import Footer from '../Footer';
import  Profile  from '../Profile';
import './style.css';

function Index() {
  return (
    <div className="Index position-relative">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
      
    </div>
  );
}

export default Index
;
