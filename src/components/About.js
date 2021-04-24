import React from 'react';

function About(){
    return(
        <div className={'bg-dark bg-no-repeat bg-cover bg-top min-h-screen max-h-screen flex justify-center items-center flex-wrap'}>
            <div className={'text-center w-full mb-44'}>
        <div id='about-section'/>
                <h1 className={'font-bold px-2 text-7xl text-white'}>About Me.</h1>
                <p className={'font-normal text-md text-white text-justify mx-auto max-w-prose py-10 px-5 '}>
                    Hi! I’m Jess.  I’m a front-end developer and UX designer specializing in Figma, Adobe Creative Suite, HTML, CSS, JS and React.
                    <br/><br/>
                    I can attribute creativity, dedication and organization to be the most valuable qualities for success in my career. As an alumni of Lambda Schools Full Stack program, I believes the time working in a collaborative setting in a full-stack environment was crucial in developing my love for user experience engineering, and the handoff between design and development.
                    <br/><br/>
                    When not in front of a computer screen, I enjoy playing beach volleyball, catering to my house plants, and mountain biking with her Australian Shepherd, Bear, and fiance Nick.</p>
                </div>
        </div>
    )
}

export default About;