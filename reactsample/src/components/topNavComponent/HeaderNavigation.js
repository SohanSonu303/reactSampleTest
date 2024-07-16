import React from 'react';
import './nav.css'
import Menucomp from './MenuComponent.js';

function HeaderNavgation(){
    return (
        <section className='header__sectionDiv'>
            <section className='image__header'>
                <img className='headerImage' src= '/tinkuannapic3.png' alt='HeaderImage'></img>
                <h1 className='header__name'>Sujith Benjamin</h1>
            </section>
            <section className='list__header'>
                <ul className='unOrderedList'>
                    <li><a className='listElement' href='#about'>About</a></li>
                    <li><a className='listElement' href='#project'>Projects</a></li>
                    <li><a className='listElement' href='#contact'>Contact Me</a></li>
                </ul>
            </section>

        </section>
        

    );
}

export default HeaderNavgation;