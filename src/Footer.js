import React from "react";
import './Footer.css';
import linkedin from './static/linkedin.png';
import github from './static/github.png';


function Footer() {

    return(

        <div className='footer'>
            <img className='github' src={github}/>
            <img className='linkedin' src={linkedin}/>
            <h4 className='copyright'>Copyright &copy; Marc Ghannam 2020</h4>





        </div>
    )

}


export default Footer;