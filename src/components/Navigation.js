import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className={'bg-purple-700 py-10 px-10 grid grid-cols-6 gap-4'}>
            <div className={'col-start-1 col-end-4 font-poppins text-purple-400'}>
            <Link to={'/about'} className={'p-2 rounded hover:bg-purple-500 active:bg-purple-600'}>About</Link>
            <Link to={'/design'} className={'p-2'}>Design</Link>
            <Link to={'/development'} className={'p-2'}>Development</Link>
            <Link to={'/contact'} className={'p-2'}>Contact</Link>
            </div>
            <div className={'col-end-7 col-span-2 font-poppins text-purple-500'}>
                <Link to={'/'}>
                <h1 className={'text-right'}>Jessica Leah Wolff</h1>
                </Link>
            </div>
        </div>
        
    )
    
};


export default Navigation;