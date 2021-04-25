import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className={'pt-5 flex justify-center'}>
            <div className={'text-center text-xl font-poppins font-bold text-purple-700'}>
                <Link to={'/'}
                className={'p-5 text-purple-500'}>JLW
                </Link>
                <a href='#work-section' className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>My Work.</a>
                <a href='#contact-section' className={'p-2 m-2 rounded hover:bg-purple-100 active:bg-purple-600'}>Contact.</a>
            
            </div>
        </div>
        
    )
    
};


export default Navigation;