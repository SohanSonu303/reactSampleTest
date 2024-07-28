import React, { useState, useEffect, useRef } from 'react';
import './centerComp.css'
import { colors } from '@mui/material';

function CenterComponent(){

    const animElementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.5) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, {
            threshold: [0.1, 0.8] // Adjust thresholds as needed
        });

        if (animElementRef.current) {
            observer.observe(animElementRef.current);
        }

        return () => {
            if (animElementRef.current) {
                observer.unobserve(animElementRef.current);
            }
        };
    },[]);

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

                <div className={`bodyAnimationSec ${isVisible ? 'visible' : ''}`}>
                            <img
                                className={`bodyimageAni ${isVisible ? 'visible' : ''}`}
                                src='/homepic4.jpg'
                                alt='HeaderImage'
                                onLoad={() => setIsVisible(true)}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <div className={`p-tags ${isVisible ? 'visible' : ''}`} ref={animElementRef}>
                                <p>
                                    "The essence of architecture is in its continual evolution. <br />
                                    Rather than starting anew, you can collaborate with us to transform your <br></br><strong style={{color:"#22cbdb"}}>vision</strong> into a <strong style={{color:"#22cbdb"}}>sophisticated</strong> and refined <strong style={{color:"#22cbdb"}}>reality</strong>."
                                </p>
                            </div>
                </div>
            
            {/* <div className='biggertextSec'>
                <div className='textSecInnnerdiv'>
                    <p className="autoBlur p-tag-1">Innovative</p>
                    <p className='autoBlurText'>"Innovative design is at the heart of every architectural masterpiece. It's about pushing boundaries, embracing new technologies, and creating spaces that inspire and transform the way we live and work."</p>
                </div>

                <div className='textSecInnnerdiv'>
                    <p className="autoBlur p-tag-2">Personalized</p>
                    <p className='autoBlurText'>"Personalized architecture ensures that each structure resonates with the unique needs and aspirations of its occupants. From bespoke interiors to tailored spatial arrangements, it's all about creating a perfect harmony between functionality and individuality."</p>
                </div>

                <div className='textSecInnnerdiv'>
                    <p className="autoBlur p-tag-3">Limitless</p>
                    <p className='autoBlurText'>"Architectural creativity knows no bounds. With limitless possibilities, we can reimagine urban landscapes, defy gravity with soaring skyscrapers, and craft environments that are as dynamic and diverse as the people who inhabit them."</p>
                </div>

                <div className='textSecInnnerdiv'>
                    <p className="autoBlur p-tag-4">Discover</p>
                    <p className='autoBlurText'>"Architecture is a journey of discovery. Each project unveils new challenges and opportunities, inviting us to explore innovative solutions and uncover the hidden potential within every site."</p>
                </div>

               <div className='textSecInnnerdiv'>
                    <p className="autoBlur p-tag-5">Pioneering</p>
                    <p className='autoBlurText'>"Pioneering architecture leads the way for future generations. By integrating sustainable practices, cutting-edge technologies, and visionary design, we shape the world of tomorrow, setting new standards for excellence and creativity."</p>
                </div>
                
            </div> */}
            

            <div className='projectDesc'>
                <div className='projectDesc1'>
                    <p className='body__paraTagDesc'>
                    The building showcases a contemporary architectural style with clean lines and a minimalist design.<br></br>
                    allow ample natural light to penetrate the interior.<br></br>
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
                        create an interesting focal point.<br></br>
                        </p>    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CenterComponent;