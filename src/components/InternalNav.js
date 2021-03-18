import React from 'react';
import { Link } from 'react-router-dom';

function InternalNav(){
    return(
        <div className={'py-10 px-10 grid grid-cols-6 gap-4'}>
            <div className={'col-start-1 col-end-4 font-poppins text-purple-700 dark:text-purple-100'}>
            <Link to={'/'} className={'p-2 rounded hover:bg-purple-500 active:bg-purple-600'}>Home</Link>    
            <Link to={'/about'} className={'p-2 rounded hover:bg-purple-500 active:bg-purple-600'}>About</Link>
            <Link to={'/design'} className={'p-2'}>Design</Link>
            <Link to={'/development'} className={'p-2'}>Development</Link>
            <Link to={'/contact'} className={'p-2'}>Contact</Link>
            </div>
        </div>
        
    )
    
};


export default InternalNav;