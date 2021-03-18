import React from 'react';
import Navigation from './Navigation';

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
        <div className={'bg-light dark:bg-dark bg-no-repeat bg-cover'}>
            
        <div className={'min-h-screen flex justify-center items-center space-x-1 z-10'}>
            <div className={'font-poppins text-right'}>
                <h1 className={'font-bold text-6xl text-white'}>Jessica Wolff</h1>
                <h2 className={'mt-2 font-thin text-4xl text-sunset-100 dark:text-purple-100'}>Web Developer & Designer</h2>
                <div className={'mt-2 flex flex-nowrap justify-end'}>
                    <img className={'p-5'} src={Linkedin}/>
                    <img className={'p-5'} src={Github}/>
                    <img className={'p-5'} src={Twitter}/>
                </div>
            </div>
            <div className={'w-3/12'}>
                <div onClick={toggleMode}>
                    {!darkMode ? <div className={'p-2'}><img className={'animate-sunMoon delay-200 duration-300'} src={Sun}/></div> : <div className={'p-2'}><Stars/><img className={'animate-sunMoon delay-200 duration-300'} src={Moon}/></div>}
                </div>
        </div>
        </div>
    
        </div>

)
}

export default Home;



// FIRST ATTMEPT DARKMODE
// const [theme, setTheme] = useDarkMode();
// React.useEffect(() => {},[theme]);


{/* {console.log(darkMode)} */}
{/* <span onClick={() => setTheme(() => theme === 'light' ? 'dark' : 'light')}>
{theme === 'light' ? <div className={'p-2'}><img className={'transform scale-75'} src={Sun}/></div> : <div className={'p-2'}><Stars/><img className={'transform scale-50'} src={Moon}/></div>}
</span> */}
{/* {console.log(theme)} */}