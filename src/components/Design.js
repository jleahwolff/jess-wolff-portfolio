import React from 'react';
import RubberDuck from '../assets/rubber-duck-dashboard.png';
import SoMe from '../assets/some-dashboard.png';

function Design(){
    return(
        <div className={'bg-purple-700 min-h-screen max-h-screen flex justify-center items-center flex-wrap'}>
            <div className={'text-center w-full mb-20'}>
                <h1 className={'font-bold px-2 text-7xl text-white'}>My Work.</h1>
                <div className={'flex justify-center py-28'}>
                <a href='https://www.behance.net/gallery/116952765/Rubber-Duck-Finance' target="blank" className={''}>
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-300 hover:scale-110 flex-1'}>
                        <img src={RubberDuck} className={'max-w-sm -mt-24'}/>
                        <h4 className={'my-5 font-bold text-xl max-w-xs mx-auto'}>Finances are tough. Understanding them should be easy.</h4>
                        <h3 className={'font-medium text-lg'}>Rubber Duck Finance</h3>
                        <p className={'italic text-sm font-thin'}>UX Design, Branding, Front-End</p>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/116725273/SoMe-Social-Media-Strategy' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={SoMe} className={'max-w-sm -mt-24'}/>
                        <h4 className={'my-5 font-bold text-xl max-w-xs mx-auto'}>Streamline, optimize and track your social media presence.</h4>
                        <h3 className={'font-medium text-lg'}>SoMe: Social Media Strategy</h3>
                        <p className={'italic text-sm font-thin'}>User Research, Ux Engineer, Front-end</p>
                    </div>
                    </a>
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110'}>
                        <img src={RubberDuck} className={'max-w-sm -mt-24'}/>
                        <h4 className={'my-5 font-bold text-xl max-w-xs mx-auto'}>Finances are tough. Understanding them should be easy.</h4>
                        <h3 className={''}>Rubber Duck Finance</h3>
                    </div>
        
                </div>
                </div>
        </div>
    )
}

export default Design;