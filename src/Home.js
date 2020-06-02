import React from "react";
import './Home.css'
import computer from "./static/computer.png";
import resume from "./static/resume.png";
// import Pdf from "static/myresume.pdf"



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

            </div>


        </div>




    </div>

    )

}

export default Home;