import React from 'react';
import Lottie from 'lottie-react';
import animationData from './laoding.json'; // Import your animation JSON

const LottieAnimation = () => {
    // Define inline styles
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      textAlign: 'center',
      backgroundColor: '#34353a', // Optional: Background color
    };
  
    const messageStyle = {
      fontSize: '18px',
      color: '#333', // Adjust color as needed
      marginTop: '20px',
      color:'white' // Space between animation and message
    };
  
    const lottieStyle = {
      width: '200px', // Adjust size as needed
      height: '200px', // Adjust size as needed
    };
  
    return (
      <div style={containerStyle}>
        <Lottie 
          animationData={animationData}
          loop
          autoplay
          style={lottieStyle}
        />
        <div style={messageStyle}>Construction in-progress...</div>
      </div>
    );
  };

export default LottieAnimation;