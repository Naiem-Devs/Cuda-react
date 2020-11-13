import React from 'react';
import Header from './page/header/Header'
import Home from './page/home/Home'
import Service from './page/service/Service'
import Team from './page/team/Team'
import Skills from './page/skills/Skills'
import Portfolio from './page/portfolio/Portfolio'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import Footer from './page/footer/Footer'


function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <Service />
      <Team />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
