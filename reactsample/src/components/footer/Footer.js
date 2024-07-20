import React from 'react';
import './footer.css'
import FooterAnimation from './FooterAnimation';


function Footer(){

    return (
        <div className='footerMainDiv'>
            <div className='footerLogoName'>
                <h1 className='footLogoName'>
                    BS CONSTRUCTIONS
                </h1>
                <p className='footerptag'>Privacy policy <br></br>@ all rights reserved</p>
            </div>
            <div>
            <FooterAnimation className="footeranimation"></FooterAnimation>
            </div>
            <div className='aniamtionFooter'>
                <h1 className='footerContact'>Get in touch : bbsujith@gmail.com <br></br><br></br> Phone no : 7702264603</h1>
                
            </div>
        </div>

    );
}

export default Footer;