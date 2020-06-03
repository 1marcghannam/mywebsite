import React from "react";
import './Home.css'
import computer from "./static/computer.png";
import resume from "./static/resume.png";

import js from "./static/js.png";
import css from "./static/css.png";
import html from "./static/html.png";
import react from "./static/react.png";
import python from "./static/python.png";
import project1 from "./static/projectpic1.png"
import project2 from "./static/projectpic2.png"
import mailpic from "./static/mail.png"


function Home() {





    return(
        <div>
        <div className='helloMessage'>

            <h1 className='intro shake-horizontal'>"Hello World!"</h1>
            <img className='computer' src={computer}/>
            <p className='intro-sub'>My name is Marc. Welcome to my page!</p>
            <p className='intro-sub2'>You can click the button below to get my resume, or scroll down to learn more about me.</p>
            <div className='respic'><a href="https://drive.google.com/file/d/1NegG9ggTdcl9-VcbFvAVP8eVcIOAM0O3/view?usp=sharing" target="_blank"><img className='resume' src={resume}/></a></div>

            <div className='about' id='about'>
                <h1> About Me </h1>
                <p className='story1'> I'm a Junior Computer Engineering Student at Wentworth Institute of Technology. I was
                    born and raised in Beirut, Lebanon. I find joy in solving complex problems and learning new things.
                    I'm also a watch collector and enthusiast.</p>
                <h1> My Skills</h1>
                <p className='story1'> I'm an avid learner and I've always been passionate about finding the right solution for every problem I encounter. I love sharing cool ideas
                with other creative minds, as well as working in a team with a positive mindset.</p>

                <div className='allcards'>
                <div className="card">
                    <img className='cutoff' src={python}/>
                        <div className="container">
                            <h4><b>Python</b></h4>

                        </div>
                </div>
                    <div className="card">
                    <img className='cutoff' src={react}/>
                        <div className="container">
                            <h4><b>React</b></h4>

                        </div>
                </div>
                    <div className="card">
                    <img className='cutoff' src={css}/>
                        <div className="container">
                            <h4><b>CSS</b></h4>

                        </div>
                </div>
                    <div className="card">
                    <img className='cutoff' src={html}/>
                        <div className="container">
                            <h4><b>HTML</b></h4>

                        </div>
                </div>
                    <div className="card">
                    <img className='cutoff' src={js}/>
                        <div className="container">
                            <h4><b>Javascript</b></h4>

                        </div>
                </div>



                    </div>


            </div>

            <div className='projects' id='projects'>
                <h1> My Projects </h1>
                <p className='story1'> My small projects include a Python Bot for Tinder, a Black Ice Detector with an Arduino, and much more.
                 Below are some of my larger projects and still in progress.</p>

                <div className='allcards'>
                <div className="cardproject">
                    <img className='projectpic' src={project1}/>
                        <div className="containerproject">
                            <h4><b>Personal Portfolio with React</b></h4>

                        </div>
                </div>
                    <div className="cardproject">
                    <img className='projectpic' src={project2}/>
                        <div className="containerproject">
                            <h4><b>Watch Store Business</b></h4>

                        </div>
                </div>


                    </div>

            </div>

            <div className='contact1' id='contact'>
                <h1> Contact me </h1>
                <p className='story1'> Thank you for visiting my page. You can click the button below to get in touch with me through E-Mail.
                You will also find my LinkedIn and Github accounts linked in the footer.</p>
                <div className='mailpic'><a href = "mailto: 1marc.ghannam@gmail.com" ><img className='resume' src={mailpic}/></a></div>

            </div>











        </div>




    </div>

    )

}

export default Home;