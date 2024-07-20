import React, { useState } from 'react';
import './footer.css'
import FooterAnimation from './FooterAnimation';


function Footer(){

    return (
        <div className='footerMainDiv'>
            <div>
                <h1 style={{color:'#d0c7c7', fontFamily:"sans-serif", fontSize:"1.5rem"}}>
                    BS CONSTRUCTIONS
                </h1>
                <p style={{color:'#d0c7c7', fontFamily:"sans-serif", fontSize:"1rem"}}>Privacy policy <br></br>@ all rights reserved</p>
            </div>
            <div className='aniamtionFooter'>
                <h1 style={{color:'#d0c7c7', fontFamily:"monospace", fontSize:"1rem"}}>Get in touch : bbsujith@gmail.com <br></br> Phone no : 7702264603</h1>
                <FooterAnimation></FooterAnimation>
            </div>
        </div>

    );
}

export default Footer;