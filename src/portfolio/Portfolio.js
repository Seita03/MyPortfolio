import { useState, useEffect } from 'react';
import Header from './Header';
import BurgerMenu from './Menu';
import Top from './Top';
import About from './About';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio () {
    function WindowWidth() {
        let main;
        const [width, setWidth] = useState(window.innerWidth);
      
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        });
        if(width >= 992){
            main = <Header />
        }
        else {
            main = <BurgerMenu />
        }
        return (
            main
        )
      }

    return (
        <div>
            <WindowWidth />
            <Top />
            <About />
            <AboutMe />
            <Skill />
            <Products />
            <Contact />
            <Footer />
        </div>
    )
};

export default Portfolio;