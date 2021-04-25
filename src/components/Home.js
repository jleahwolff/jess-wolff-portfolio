import React from 'react';

import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Jess from '../assets/profile-pic.png';

function Home(){
    return( 
        <div>
        <div className={'bg-light bg-no-repeat bg-cover bg-bottom min-h-screen max-h-screen'}>
            <Navigation className={'flex min-w-full '}/>
            <div className={'flex flex-col mt-20 items-center justify-center sm:flex-row'}>
                <img src={Jess} className={'w-6/12 sm:w-3/12 pr-10 pb-5 sm:pb-0'}/>
            <div className={'text-center sm:text-left'}>
                <h2 className={'italic px-5 py-2 text-xl text-purple-600'}>Visualizing life on the creative side.</h2>
                <h1 className={'font-bold px-2 text-5xl sm:text-7xl text-purple-700'}>Jessica Wolff</h1>
                <p className={'font-normal text-sm sm:text-md text-purple-600 text-justify sm:max-w-prose py-10 px-5 '}>
                Hi! I’m Jess. I’m a UX Engineer with 3 years experience leading design and development efforts to create impactful products. 
                <br/><br/>
                I currently lead UX Design at Rubber Duck Finance on the financial insights tool. Specializing in Figma, Adobe Creative Suite, HTML, CSS, JS and React.
                </p>
            </div>
            </div>
        </div>
        {/* --------------- ABOUT ME */}
        <About/>
        {/* <Design/> */}
        <Contact/>
        </div>
)
}

export default Home;





