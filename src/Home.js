import React from "react";
import './Home.css'
import Face from './static/face.jpeg';
import {Link} from "react-router-dom";



function Home() {





    return(
        <div>
        <div className='helloMessage'>

            <h1 className='intro pulse'>"Hello World!"</h1>
            <p className='intro-sub'>My name is Marc. Welcome to my page! </p>
            <h1 className='intro-sub3'>A little bit about me</h1>
            <p className='story'> I'm a Junior Computer Engineering Student attending Wentworth Institute of Technology.  </p>
            <p className='story'> I'm a passionate learner and problem solver. I'm also a watch collector and enthusiast. </p>

        </div>
            <div className='helloMessage2'>
                <Link to='contact'>
                <p className='contact'>Contact Me!</p>
                </Link>




            </div>




    </div>

    )

}

export default Home;