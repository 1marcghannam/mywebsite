import React from "react";
import './Home.css'
import Face from './static/face.jpeg';
import {Link} from "react-router-dom";
import computer from "./static/computer.png";



function Home() {





    return(
        <div>
        <div className='helloMessage'>

            <h1 className='intro pulse'>"Hello World!"</h1>
            <img className='computer' src={computer}/>
            <p className='intro-sub'>My name is Marc. Welcome to my page!</p>

        </div>




    </div>

    )

}

export default Home;