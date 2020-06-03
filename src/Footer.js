import React from "react";
import './Footer.css';
import linkedin from './static/linkedin.png';
import github from './static/github.png';


function Footer() {

    return(

        <div className='footer'>

            <div className='contain'>
            <a href='https://github.com/1marcghannam'><img className='github' src={github}/></a>
            <a href='https://www.linkedin.com/in/marc-g-383509131'><img className='linkedin' src={linkedin}/></a>
            </div>
            <h4 className='copyright'>Copyright &copy; Marc Ghannam 2020</h4>





        </div>
    )

}


export default Footer;