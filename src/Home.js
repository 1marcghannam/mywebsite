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
            <p className='intro-sub2'>You can click the button below to get to my resume, or scroll down to learn more about me!</p>
            <div className='respic'><a href="https://drive.google.com/file/d/1NegG9ggTdcl9-VcbFvAVP8eVcIOAM0O3/view?usp=sharing" target="_blank"><img className='resume' src={resume}/></a></div>


        </div>




    </div>

    )

}

export default Home;