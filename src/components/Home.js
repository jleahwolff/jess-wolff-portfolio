import React from 'react';

import Resume from '../assets/JessWolff-design-resume.pdf';
import Navigation from './Navigation';
import About from './About';
import Design from './Design';
import Contact from './Contact';

function Home(){
    return( 
        <div>
        <div className={'bg-light bg-no-repeat bg-cover bg-bottom min-h-screen max-h-screen flex justify-center items-top flex-wrap'}>
            <Navigation className={''}/>
            <div className={'text-center w-full'}>
                <h1 className={'font-bold px-2 text-7xl text-purple-700'}>Jessica Wolff</h1>
                <h2 className={'mt-2 font-regular px-5 text-xl text-center text-purple-600'}>A Minnesota based UX Engineer visualizing life on the creative side.</h2>
            </div>
        </div>
        {/* --------------- ABOUT ME */}
        <About/>
        <Design/>
        <Contact/>
        {/* <section className={'min-h-screen py-40 bg-white dark:bg-purple-700'}>
        <div className={'flex flex-col text-center text-purple-600 dark:text-white'}>
            <h2 className={'font-bold text-5xl'}>About Me</h2>
            <h3 className={'my-5 px-2 font-normal italic text-xl'}>Visualizing life on the creative side.</h3>
            <div className={'flex flex-col self-center'}>
            <div className={'w-full'}>{!darkMode ? <img alt='' className={'w-4/12 block m-auto'} src={LightSquiggle}/> : <img alt='' className={'w-4/12 block m-auto'} src={DarkSquiggle}/> }</div>
            <p className={'font-normal text-md md:max-w-xl max-w-sm py-10 px-5'}>Jessica is a front-end developer and UX designer specializing in Figma, HTML, CSS, JS and React. On the team at The Cultural North, Jessica has helped expand the workload capability by 20% by building comprehensive wireframe prototypes.
                <br/><br/>
                Jessica finds creativity, dedication and organization to be the most valuable qualities for success in her career.  As an alumni of Lambda Schools Full Stack program, she believes the time working in a collaborative setting in a full stack environment was crucial in developing her love for user experience engineering, and the handoff between design and development. 
                <br/><br/>
                When not in front of a computer screen, she enjoys playing beach volleyball, catering to my house plants, and mountain biking with her Australian Shepherd, Bear, and fiance Nick. </p>
            </div>
            </div>
        </section> */}
            {/* ---------------- EXPERIENCE */}
        {/* <section className={'py-40 bg-sunset-100 dark:bg-purple-200'}>
        <div className={'flex justify-center items-center pb-10'}>
        <div className={'font-poppins text-left pr-20 text-purple-600 dark:text-purple-700'}>
        <h2 className={'font-normal italic text-xl'}>Highlighted Work</h2>
        <h4 className={'font-bold text-5xl py-5'}>IllustratedJS</h4>
        <h5 className={'font-thin italic pb-1'}>UX Engineer</h5>
                <p className={'font-normal text-lg max-w-lg pb-10'}>
                illustratedJS is built for learning web developers, designed to match the learning style of the learner.  As a team, we focused on delivering intuitive visualizations to supplement the abstract concepts in development, using LottieFile animations, illustrations, video walkthrough, and documented code.
                </p>
                <a href='https://www.behance.net/gallery/116952765/Rubber-Duck-Finance' target="blank">Case Study ></a>
        </div>
        <div className={'w-3/12'}>
            <img alt='Text describing IllustratedJS' className={'w-4/12 animate-continualRotate z-10'} src={IllText}/>
            <img alt='' className={'w-9/12 transform -translate-y-20 z-0'} src={LightCirOut}/>
        </div>
        </div>
        <div className={'flex justify-center py-10'}>
        <div className={'w-3/12'}>
            <img alt='' className={'w-9/12 transform translate-y-20 translate-x-20 rotate-90 z-0'} src={DarkTriOut}/>
            <img alt='Text describing SoMe' className={'w-4/12 animate-continualRotate z-50'} src={SomeText}/>
        </div>
        <div className={'font-poppins align-center text-left pl-20 text-purple-600 dark:text-purple-700'}>
        <h2 className={'font-normal italic text-xl'}>Highlighted Work</h2>
        <h4 className={'font-bold text-5xl py-5'}>Lambda Labs Studio</h4>
        <h5 className={'font-thin italic pb-1'}>Student Designer & Developer</h5>
                <p className={'font-normal text-lg max-w-lg pb-10'}>
                Social Media Strategy is a web app built on a Postgres Database, and a Node Express back-end. The backend is connected to a DS FastAPI deployment which gathers and processes data from the Twitter API. The front-end is built on React, Redux and uses Okta for authentication. 
                </p>
                <a href='https://www.behance.net/gallery/116725273/SoMe-Social-Media-Strategy' target="blank">Case Study ></a>
        </div>
        </div>
        </section> */}
        {/* <section className={'p-10 bg-sunset-300 flex flex-row justify-center text-center text-xl'}>
                <h5 className={'font-bold text-purple-600 pr-2'}>Want to see it all on paper?</h5>
                <a href={Resume}><h6 className={'font-bold text-white w-1/12'}>Resume</h6></a>
        </section> */}
        </div>
)
}

export default Home;





