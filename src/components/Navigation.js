import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <div>
                <h1>Navigation</h1>
                {/* <Link to='/' className={`block px-4 py-2 rounded-md`}>Home</Link> */}
                <div>
                {/* <Link to={`/about`}>About</Link> */}
                </div>
                {/* <Link to='/contact' className={`block px-4 py-2 rounded-md`}>Contact</Link>
                <Link to='/' className={`block px-4 py-2 rounded-md`}>Home</Link>
                <Link to='/design' className={`block px-4 py-2 rounded-md`}>Design</Link>
                <Link to='/development' className={`block px-4 py-2 rounded-md`}>development</Link> */}
            </div>
        </div>
    )
    
};


export default Navigation;