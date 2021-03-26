import React from 'react';
import DarkTriOut from '../assets/datrout.svg';
import LightCirOut from '../assets/licirout.svg';
import IllText from '../assets/illustrated-text.svg';
import SomeText from '../assets/some-text.svg';
import Portrait from '../assets/portrait-1.svg';
import LightSquiggle from '../assets/squiggle-lighter.svg';
import DarkSquiggle from '../assets/squiggle-darker.svg';
import Linkedin from '../assets/Vector.svg';
import Twitter from '../assets/Twitter.svg';
import Github from '../assets/Github.svg';
import Moon from '../assets/moon_1.svg';
import Stars from './Stars';
import { useDarkMode }from '../hooks/useDarkMode.js';
import Sun from '../assets/sun.svg';


function Home(){
    const [darkMode, toggleMode] = useDarkMode("dark", false);
    return( 
        <div>
        
        <div className={'bg-light dark:bg-dark bg-no-repeat bg-cover min-h-screen flex justify-center items-center space-x-1 z-10'}>
            <div className={'font-poppins text-right'}>
                <h1 className={'font-bold text-6xl text-white'}>Jessica Wolff</h1>
                <h2 className={'mt-2 font-thin text-4xl text-sunset-100 dark:text-purple-100'}>FE Developer & Designer</h2>
                <div className={'mt-2 flex flex-nowrap justify-end'}>
                    <a href='https://www.linkedin.com/in/jwolff2/'><img alt='Linkedin link' className={'p-5'} src={Linkedin}/></a>
                    <a href='https://github.com/jleahwolff'><img alt='Github link' className={'p-5'} src={Twitter}/></a>
                    <a href='https://twitter.com/jleahwolff'><img alt='Twitter link' className={'p-5'} src={Github}/></a>
                </div>
            </div>
            <div className={'w-3/12'}>
                <div onClick={toggleMode}>
                    {!darkMode ? <div className={'p-2'}><img alt='' className={'animate-sunMoon'} src={Sun}/></div> : <div className={'p-2'}><Stars/><img alt='' className={'animate-sunMoon'} src={Moon}/></div>}
                </div>
        
        </div>
        </div>
        {/* --------------- ABOUT ME */}
        <section>
            <div className={'min-h-screen pt-2 bg-white dark:bg-purple-700'}>
        <div className={'flex justify-center py-40'}>
        <div className={'w-3/12'}>
            <img alt='Portrait of Jess Wolff' className={'scale-150'} src={Portrait}/>
        </div>
        <div className={'font-poppins justify-start align-center pl-20 text-left text-purple-600 dark:text-white'}>
            <h1 className={'font-bold text-5xl'}>About Me</h1>
            <h2 className={'my-5 font-normal italic text-xl'}>Visualizing life on the creative side.</h2>
            <div>{!darkMode ? <div className={'p-2'}><img alt='' className={'w-6/12'} src={LightSquiggle}/></div> : <div className={'p-2'}><img alt='' className={'w-6/12'} src={DarkSquiggle}/></div> }</div>
            <p className={'font-normal text-lg max-w-lg py-10'}>I am a front-end web developer specializing in HTML, CSS, JS and
            the React framework. I'm passionate about learning as I work,
            designing as I develop, and finding out how things operate.
            When I'm not in front of a computer screen, I'm spending time with
            my 4-year-old Australian Shepherd, Bear, and playing beach
            volleyball with my fiance, Nick.</p>
            <p className={'font-normal text-lg max-w-lg pb-10'}>
                Languages: HTML, CSS, JS, VueJS, React
                Design: Figma, Adobe Creative Suite: Illustrator, AfterEffects,
                InDesign CC, Photoshop CC, Lightroom Classic
            </p>
            </div>
        </div>
    </div>
        </section>
        <section className={'py-40 bg-sunset-100 dark:bg-purple-200'}>
            {/* ---------------- EXPERIENCE */}
        <div className={'flex justify-center items-center pb-10'}>
        <div className={'font-poppins justify-center text-left pr-20 text-purple-600 dark:text-purple-700'}>
        <h2 className={'font-normal italic text-xl'}>Experience</h2>
        <h4 className={'font-bold text-5xl py-5'}>IllustratedJS</h4>
        <h5 className={'font-thin italic pb-1'}>Head of Product Design</h5>
                <p className={'font-normal text-lg max-w-lg pb-10'}>
                illustratedJS is built for learning web developers, designed to match the learning style of the learner.  As a team, we focused on delivering intuitive visualizations to supplement the abstract concepts in development, using LottieFile animations, illustrations, video walkthrough, and documented code.
                </p>
                <a href='https://www.figma.com/file/wI5x7JQAs9QQbiEWk9vlWb/Landing-Web-V2?node-id=0%3A1'><h5 className={'font-bold text-purple-500'}>Figma design file> </h5></a>
                <a href='https://github.com/IllustratedJS/IllustratedJS.git'><h5 className={'font-bold text-purple-500'}>Github repository> </h5></a>
            
        </div>
        <div className={'w-3/12'}>
            <img alt='Text describing IllustratedJS' className={'w-4/12 animate-continualRotate z-10'} src={IllText}/>
            <img alt='' className={'w-9/12 transform -translate-y-20 z-0'} src={LightCirOut}/>
        </div>
        </div>
        {/* ---------EXPERIENCE 2 */}
        <div className={'flex justify-center py-10'}>
        <div className={'w-3/12'}>
            <img alt='' className={'w-9/12 transform translate-y-20 translate-x-20 rotate-90 z-0'} src={DarkTriOut}/>
            <img alt='Text describing SoMe' className={'w-4/12 animate-continualRotate z-50'} src={SomeText}/>
        </div>
        <div className={'font-poppins justify-center align-center text-left pl-20 text-purple-600 dark:text-purple-700'}>
        <h2 className={'font-normal italic text-xl'}>Experience</h2>
        <h4 className={'font-bold text-5xl py-5'}>Lambda Labs Studio</h4>
        <h5 className={'font-thin italic pb-1'}>Student Designer & Developer</h5>
                <p className={'font-normal text-lg max-w-lg pb-10'}>
                Social Media Strategy is a web app built on a Postgres Database, and a Node Express back-end. The backend is connected to a DS FastAPI deployment which gathers and processes data from the Twitter API. The front-end is built on React, Redux and uses Okta for authentication. 
                </p>
                <a href='https://www.figma.com/file/ssdhBZL2Yr9GYaRyZtO8Cu/Social-Media-Strategy-JP?node-id=179%3A0'><h5 className={'font-bold text-purple-500'}>Figma design file> </h5></a>
                <a href='https://github.com/jleahwolff/social-media-strategy-fe.git'><h5 className={'font-bold text-purple-500'}>Github repository> </h5></a>
                <a href='https://www.notion.so/lambdaxarchives/SoMe-Social-Media-Strategy-9d1840703db34c5cb44d0f4a0cc45543'><h5 className={'font-bold text-purple-500'}>Notion Document> </h5></a>
            
        </div>
        </div>
        </section>
        </div>
)
}

export default Home;





