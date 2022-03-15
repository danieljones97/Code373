import React from 'react';
import animatedGif from '../images/background.gif';

const Home = () => {

    return (
        <div className="module-content">
            <h3 id="home-title">Code373</h3>
            <img src={animatedGif} alt="animated-neon-street-gif"/>
        </div>
    );
};

export default Home;
