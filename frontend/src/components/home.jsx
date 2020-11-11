import React from 'react';
import stars from '../visuals/stars.mp4';

const Home = () => {
    return (
        <React.Fragment>
            <div className="video-background">
                <div className="video-wrap">
                    <div id="video">
                        <video id="bg-vid" autoPlay loop muted playsInline>
                            <source src={stars} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="caption">
                <h1>Disaster Analysis Dashboard</h1>
                <h3>Enjoy the Calm Before the Storm</h3>
                <p>
                    Disaster Analysis Dashboard (DAD) is meant to track major disasterous crisis using
                    social media posts from users. <br/>It collects all feeds and displays them in the 
                    Live Feed page and analyses the numbers in Analystics page.
                </p>
            </div>
        </React.Fragment>
    );
}

export default Home;