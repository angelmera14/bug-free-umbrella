import React from 'react';


// CSS styles
/* import '../App.css' */

// Import owner
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Portafolio from './Portafolio';
import Comentarios from './Comentarios';
import Footer from './Footer';


function Home() {

  return (
        <div className="home">
            <Nav />
            <Banner/>
            <About />
            <Portafolio />
            <Contact />
            <Comentarios />
            <Footer />
        </div>
  );
}

export default Home;