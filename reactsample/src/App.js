import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderNavgation from './components/topNavComponent/HeaderNavigation'
import CenterComponent from './components/body/CenterComponent'
import SimpleBottomNavigation from './components/footerObject/SimpleBottomNavigation'
import ImageGallery from './components/body/ImageGallery';
import LottieAnimation from './components/animations/LottieAnimation';

function App() {

      const[isClicked,setIsClicked] = useState(false)

      const [loading, setLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000); // Simulate a network request or some async operation
      }, []);

      
      function iconClicked(){
        setIsClicked(!isClicked)
        console.log(isClicked)
      }

  return (
    <div className="App">
      {
      loading ? <LottieAnimation /> : 
              <div className="App">
                    {/* <img className='background_land' src='/landscape.jpg' alt ="landscape"></img> */}
                    <section className='container'>
                      <HeaderNavgation></HeaderNavgation>
                    </section>
                    <section>
                      <CenterComponent></CenterComponent>
                    </section>

                    <section className='imageGalleryContainer'>
                      <ImageGallery></ImageGallery>
                    </section>

                    <section className='sideIconSection'>
                        <button className='svgSideIcon' onClick={iconClicked}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M550.5 241l-50.1-86.8c1.1-2.1 1.9-4.6 1.9-7.2 0-8-6.7-14.7-14.7-15l-55.4-95.9c.5-1.6 1.1-3.2 1.1-4.8 0-8.6-7-15.3-15.3-15.3-4.8 0-8.8 2.1-11.8 5.6H299.5C296.8 18.1 292.8 16 288 16s-8.8 2.1-11.5 5.6H170.4C167.5 18.1 163.4 16 158.6 16c-8.3 0-15.3 6.7-15.3 15.3 0 1.6 .5 3.5 1.1 4.8l-56 97.2c-5.4 2.4-9.1 7.5-9.1 13.7 0 .5 .3 1.1 .3 1.6l-53.3 92.1c-7.2 1.3-12.6 7.5-12.6 15 0 7.2 5.1 13.4 12.1 15l55.2 95.4c-.5 1.6-.8 2.9-.8 4.8 0 7.2 5.1 13.4 12.1 14.7l51.7 89.7c-.5 1.6-1.1 3.5-1.1 5.4 0 8.6 7 15.3 15.3 15.3 4.8 0 8.8-2.1 11.5-5.4h106.9C279.2 493.9 283.4 496 288 496s8.8-2.1 11.5-5.4h107.1c2.7 2.9 6.7 4.8 11 4.8 8.6 0 15.3-7 15.3-15.3 0-1.6-.3-2.9-.8-4.3l51.7-90.3c7-1.3 12.1-7.5 12.1-14.7 0-1.6-.3-3.2-.8-4.8l54.9-95.4c7-1.3 12.3-7.5 12.3-15 0-7.2-5.1-13.4-11.8-14.7zM153.5 450.7l-43.7-75.8h43.7v75.8zm0-83.8h-43.7c-.3-1.1-.8-2.1-1.3-3.2l45-47.4v50.6zm0-62.4l-50.4 53.3c-1.3-.5-2.7-1.3-4-1.6L43.4 259.8c.5-1.3 .5-2.7 .5-4s0-2.4-.3-3.5l52-90c2.7-.3 5.4-1.1 7.8-2.7l50.1 52v92.9zm0-102.3l-45.8-47.4c1.3-2.1 2.1-4.8 2.1-7.8 0-.3-.3-.8-.3-1.1l43.9-15.8v72.1zm0-80.6l-43.7 15.8 43.7-75.5v59.7zm326.5 39.1l.8 1.3L445.5 329.1l-63.8-67.2 98-101.5 .3 .3zM291.8 355.1l11.5 11.8H280.5l11.3-11.8zm-.3-11.3l-83.3-85.4 79.6-84.4 83 87.6-79.3 82.2zm5.4 5.9l79.3-82.2 67.5 71.3-5.9 28.1H313.7l-16.9-17.1zM410.4 44.4c1.1 .5 2.1 1.1 3.5 1.3l57.9 100.7v.5c0 2.9 .8 5.6 2.1 7.8L376.4 256l-83-87.6L410.4 44.4zm-9.1-2.1L287.7 162.5l-57.1-60.3 166.3-60h4.3zm-123.5 0c2.7 2.7 6.2 4.3 10.2 4.3s7.5-1.6 10.2-4.3h75L224.8 95.8 173.9 42.3h103.9zm-116.2 5.6l1.1-2.1a33.8 33.8 0 0 0 2.7-.8l51.2 53.8-54.9 19.8V47.9zm0 79.3l60.8-22 59.7 63.2-79.6 84.1-41-42.1v-83.3zm0 92.7L198 257.6l-36.4 38.3v-76.1zm0 87.9l42.1-44.5 82.8 86-17.1 17.7H161.6v-59.2zm7 162.1c-1.6-1.6-3.5-2.7-5.9-3.5l-1.1-1.6v-89.7h99.9l-91.6 94.8h-1.3zm129.9 0c-2.7-2.4-6.4-4.3-10.4-4.3s-7.8 1.9-10.4 4.3h-96.4l91.6-94.8h38.3l91.6 94.8H298.4zm120-11.8l-4.3 7.5c-1.3 .3-2.4 .8-3.5 1.3l-89.2-91.9h114.4l-17.4 83zm12.9-22.2l12.9-60.8h22l-34.8 60.8zm34.8-68.8h-20.4l4.6-21.2 17.1 18.2c-.5 .8-1.1 1.9-1.3 2.9zm66.2-107.4l-55.4 96.7c-1.3 .5-2.7 1.1-4 1.9l-20.6-22 34.6-163.9 45.8 79.3c-.3 1.3-.8 2.7-.8 4.3 0 1.3 .3 2.4 .5 3.8z"/></svg>
                        </button>
                      <section className='appFooter'>
                      <SimpleBottomNavigation/>
                      </section>
                    </section>

                    <footer> 
                      
                    </footer>
              </div>
      }
    </div>
  );
}

export default App;
