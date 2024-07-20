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
      backgroundColor: '#000000', // Optional: Background color
    };

    const lottieStyle = {
        width: '5rem', // Adjust size as needed
        height: '5rem', // Adjust size as needed
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
