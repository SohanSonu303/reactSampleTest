import React from 'react';
import './App.css';
import HeaderNavgation from './components/topNavComponent/HeaderNavigation'
import CenterComponent from './components/body/CenterComponent'
import SimpleBottomNavigation from './components/footerObject/SimpleBottomNavigation'

function App() {
  return (
    <div className="App">
      {/* <img className='background_land' src='/landscape.jpg' alt ="landscape"></img> */}
      <section className='container'>
        <HeaderNavgation></HeaderNavgation>
      </section>
      <section>
        <CenterComponent></CenterComponent>
      </section>
      <footer className='appFooter'> 
        <p className='paragraphApp'>© 2024 by Sujith Benjamin</p>
        <p className='paragraphApp'>Powered and secured</p>
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </footer>
    </div>
  );
}

export default App;
