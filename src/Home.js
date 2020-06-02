import React from "react";
import './Home.css'
import computer from "./static/computer.png";
import resume from "./static/resume.png";

import js from "./static/js.png";
import css from "./static/css.png";
import html from "./static/html.png";
import react from "./static/react.png";
import python from "./static/python.png";




function Home() {





    return(
        <div>
        <div className='helloMessage'>

            <h1 className='intro pulse'>"Hello World!"</h1>
            <img className='computer' src={computer}/>
            <p className='intro-sub'>My name is Marc. Welcome to my page!</p>
            <p className='intro-sub2'>You can click the button below to get my resume, or scroll down to learn more about me.</p>
            <div className='respic'><a href="https://drive.google.com/file/d/1NegG9ggTdcl9-VcbFvAVP8eVcIOAM0O3/view?usp=sharing" target="_blank"><img className='resume' src={resume}/></a></div>

            <div className='about'>
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


        </div>




    </div>

    )

}

export default Home;