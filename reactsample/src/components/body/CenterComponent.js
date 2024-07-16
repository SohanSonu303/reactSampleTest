import React from 'react';
import './centerComp.css'

function CenterComponent(){
     return(
        <section className='body_section'>
            <div className='paraDiv'>
                <p className='paragraph'>
                   I'm a meticulous architect of dreams,<br></br>crafts each project with a blend of artistry and precision.
                   <br></br>With a keen eye for detail and a passion for innovation
                </p>
            </div>
            <div className='imageBodyDiv'>
                 <img className='bodyimage' src= '/tinkuannapic2copy.png' alt='HeaderImage'></img>
            </div>
        </section>
     );
}

export default CenterComponent;