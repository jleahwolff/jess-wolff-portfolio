import React from 'react';
import { Link } from 'react-router-dom';
import LightSquiggle from '../assets/squiggle-lighter.svg';

function FourOhFour(){

return(
<div className={'bg-purple-700 text-white min-h-screen flex flex-col justify-center items-center'}>
    <h1 className={'font-black text-6xl'}>404</h1>
    <img alt='' className={'w-2/12 mt-2 mb-10'} src={LightSquiggle}/>
    <h4>Page is under construction. Come back later!</h4>
    <Link to={'/'} className={'p-2 font-bold'}>Back to Home ></Link>
</div>
)
};

export default FourOhFour;