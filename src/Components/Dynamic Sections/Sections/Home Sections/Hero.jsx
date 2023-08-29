import React from 'react';
import '../../../../CSS/Main Content/Home/Home.css';

export default function Hero({ videoSource, headerText, subheaderText }) {
    return (
        <div className="hero-container">
            <video className="hero-bgvideo" src={videoSource} autoPlay loop muted />
            <div className="hero-overlay">
                <h1 className="hero-header">{headerText}</h1>
                <h2 className="hero-subheader">{subheaderText}</h2>
            </div>
        </div>
    );
}
