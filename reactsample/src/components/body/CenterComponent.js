import React, { useState, useEffect } from 'react';
import './centerComp.css'
import { colors } from '@mui/material';

function CenterComponent(){

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setImageLoaded(true);
      }, 1000); // Match this with the image animation duration
      return () => clearTimeout(timer);
    }, []);

     return(
        <div className='body__MainSection'>
            <div className='body_section'>
                <div className='paraDiv'>
                    <p className='paragraph'>
                        I'm <strong style={{color:"#ffc86b"}}>Sujith Benjamin</strong> <br></br> Architect & Designer
                    </p>
                </div>
                <div className='imageBodyDiv'>
                    <img className='bodyimage' src= '/tinkuannapic2copy.png' alt='HeaderImage'></img>
                </div>
            </div>
                <div className="divBorder">
            </div>

            <div className='body__aboutSection'>
                <h1><strong style={{"font-family":"Courier New, Courier, monospace","fontSize":"2rem","color":"white"}}>ABOUT</strong></h1>
                <p className='body__paraTag'>As an architect and builder, I am <strong style={{color:"#ffc86b"}}>reliable, innovative, and an adept communicator</strong>. With a strong foundation in both design and construction, I seamlessly blend creativity with practicality to bring visionary projects to life. 
                    <br></br>I eagerly look forward to contributing to a dynamic and fulfilling project, where I can leverage my skills to design and construct outstanding structures. 
                    <br></br>My passion for sustainable and functional architecture drives me to deliver projects that not only meet but exceed client expectations.</p>
            </div>

            <div className='bodyAnimationSec'>
                <img className='bodyimage' src= '/homepic4.jpg' alt='HeaderImage' 
                onLoad={() => setImageLoaded(true)}
                style={{ width: '100%', height: 'auto' }}
                ></img>
                <div className={`p-tags ${imageLoaded ? 'visible' : ''}`}>
                    <p>"The essence of architecture is in its continual evolution. <br></br>Rather than starting anew, you can collaborate with us to transform your vision into a sophisticated and refined reality."</p>
                </div>
            </div>

            <div className='biggertextSec'>
                <p className="autoBlur p-tag-1">Innovative</p>
                <p className="autoBlur p-tag-2">Personalized</p>
                <p className="autoBlur p-tag-3">Limitless</p>
                <p className="autoBlur p-tag-4">Discover</p>
                <p className="autoBlur p-tag-5">Pioneering</p>
            </div>
            <div className='projectDesc'>
                <div className='projectDesc1'>
                    <p className='body__paraTagDesc'>
                    The building showcases a contemporary architectural style with clean lines and a minimalist design.<br></br>
                    The façade is constructed with grey bricks, complemented by large, rectangular windows that allow ample natural light to penetrate the interior.<br></br>
                    The structure includes modern materials such as metal cladding and wood accents, particularly noticeable in the recessed section under the overhanging roof.<br></br>
                    The combination of materials and the geometric precision of the design highlight a sophisticated and functional approach to modern architecture.
                    </p>
                    <div>
                        <img src='./belowpic2.jpg' className='bodyimageDesc'>
                        </img>
                    </div>
                </div>


                <div className='projectDesc2'>
                    <img src='./belowpic3.jpg' className='bodyimageDesc'>
                    </img>
                    <div>
                        <p className='body__paraTagDesc'>
                        The staircase features a sleek and modern design with wooden steps and black metal railings, combining natural elements with industrial materials.<br></br>
                        The vertical light fixtures with wooden bulb casings add a warm ambiance and create an interesting focal point.<br></br>
                        The surrounding area includes white walls adorned with framed artwork and decorative elements, contributing to a contemporary aesthetic.<br></br>
                        The open space below the staircase houses a stylish console table with decorative items and a lamp, enhancing the overall appeal of the space.
                        </p>    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CenterComponent;