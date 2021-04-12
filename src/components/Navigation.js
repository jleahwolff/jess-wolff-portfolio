import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../assets/Vector.svg';
import Email from '../assets/email.svg';
import Github from '../assets/Twitter.svg';

function Navigation(){
    return(
        <div className={'pt-5 flex justify-center'}>
            <div className={'text-center text-xl font-poppins font-bold text-purple-700'}>
                <Link to={'/'}
                className={'p-5 text-purple-200'}>JLW
                </Link>
            <Link to={'/about'} className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>About.</Link>
            <Link to={'/design'} className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>Design.</Link>
            <Link to={'/development'} className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>Development.</Link>
            <Link to={'/contact'} className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>Contact.</Link>
            {/* <div className={'flex'}>
            <a href='https://www.linkedin.com/in/jwolff2/' target="blank"><img alt='Linkedin link' className={'p-5'} src={Linkedin}/></a>
            <a href='https://github.com/jleahwolff' target="blank"><img alt='Github link' className={'p-5'} src={Github}/></a>
            <a href='mailto:jessicawolff.me@gmail.com' target="blank"><img alt='Email link' className={'p-5'} src={Email}/></a>
            </div> */}
            </div>
        </div>
        
    )
    
};


export default Navigation;