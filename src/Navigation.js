import React, {useState} from "react";
import './Nav.css';
import logo from './static/ico.png';
import {Link} from "react-router-dom";


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
    const navLinks = document.querySelectorAll('.nav-links li');




        //Toggle nav
        nav.classList.toggle('nav-active');
        burger.classList.toggle('.toggle');
        navLinks.forEach((link, index) =>{

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                console.log(index / 7);
            }
        });


}



  return (

      <nav className='allnav'>
          <div className='logo'>
              <h4>Marc  Ghannam</h4>
              <p><img className='codepic' src={logo}/>Software Developer</p>


          </div>
          <ul className='nav-links'>
              <Link to='/'>
              <li onClick={() => navSlide()}>Home</li>
                  </Link>
              <Link to='projects'>
              <li onClick={() => navSlide()}>Projects</li>
                  </Link>
              <Link to='contact'>
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