import React, {useState} from "react";
import './Nav.css';
import logo from './static/ico.png';
import { Link, animateScroll as scroll } from "react-scroll";


function Navigation() {

    let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});





    const navSlide = () => {
        const burger = document.querySelector('.burger');


        const nav = document.querySelector('.nav-links');




            //Toggle nav
            nav.classList.toggle('nav-active');
            burger.classList.toggle('.toggle');


    }



  return (

      <nav className='allnav'>
          <div className='logo'>
              <h4>Marc  Ghannam</h4>
              <p><img className='codepic' src={logo}/>Software Developer</p>


          </div>
          <ul className='nav-links'>

                  <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
              <li onClick={() => navSlide()}>About</li>
              </Link>

                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <li onClick={() => navSlide()}>Projects</li>
                </Link>

                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <li onClick={() => navSlide()}>Contact</li>
                </Link>


          </ul>
          <div className='burger' onClick={() => navSlide()}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
          </div>




      </nav>






  );
}

export default Navigation;