import React from 'react';
import Lottie from 'lottie-react';
import animationData from './footerAnimation.json'; // Import your animation JSON


const FooterAnimation = () => {
    // Define inline styles
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#34353a', // Optional: Background color
    };

    const lottieStyle = {
        width: '4rem', // Adjust size as needed
        height: '4rem', // Adjust size as needed
      };
    
      return (
        <div style={containerStyle}>
          <Lottie 
            animationData={animationData}
            loop
            autoplay
            style={lottieStyle}
          />
        </div>
      );
    };
  
export default FooterAnimation;
