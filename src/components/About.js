import React from 'react';
import Portrait from '../assets/portrait.jpg';
import LightSquiggle from '../assets/squiggle-light.svg';

function About(){

    return(
    <div className={'min-h-screen flex justify-center pt-2'}>
        <div>
            <img src={Portrait}/>
        </div>
        <div className={'font-poppins text-left'}>
            <h1 className={'font-bold text-4xl text-black'}>About Me</h1>
            <h2 className={'my-5 font-normal italic text-xl text-black'}>Visualizing life on the creative side.</h2>
            <img src={LightSquiggle}/>
            </div>
    </div>
    )
}

export default About;