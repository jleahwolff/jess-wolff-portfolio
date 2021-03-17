import React from 'react';
import Linkedin from '../assets/Vector.svg';
import Twitter from '../assets/Twitter.svg';
import Github from '../assets/Github.svg';
import Moon from '../assets/moon-white.svg';
import Stars from './Stars';
import useDarkMode from '../hooks/useDarkMode.js';
import Sun from '../assets/sun.svg';

// bg-gradient-to-b from-purple-700 via-purple-500 via purple-400 to-purple-200 
function Home(){
    const [colorTheme, setTheme] = useDarkMode();
    return( 
        <div className={'bg-purple-200 dark:bg-blue-200'}>
        <div className={'min-h-screen flex justify-center items-center space-x-1 z-10'}>
            <div className={'font-poppins text-right'}>
                <h1 className={'font-bold text-6xl text-white dark:text-blue-100'}>Jessica Wolff</h1>
                <h2 className={'mt-2 font-thin text-4xl text-white'}>Web Developer & Designer</h2>
                <div className={'mt-2 flex flex-nowrap justify-end'}>
                    <img className={'p-5'} src={Linkedin}/>
                    <img className={'p-5'} src={Github}/>
                    <img className={'p-5'} src={Twitter}/>
                </div>
            </div>
            <div className={'w-3/12'}>
                
        <span onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'light' ? <div className={'p-2'}><Stars/><img className={'transform scale-50'} src={Moon}/></div>: <div className={'p-2'}><img className={'transform scale-75'} src={Sun}/></div>}
            </span>
                
            </div>
            
        </div>
        {/* <div>
            <ul>
            <li>Blog 1</li>
            </ul>
        </div> */}
        {/* <Stars className={'dark:hidden'}/> */}
        </div>

)
}

export default Home;