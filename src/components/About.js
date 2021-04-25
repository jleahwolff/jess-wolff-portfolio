import React from 'react';

import RubberDuck from '../assets/rubber-duck-dashboard.png';
import SoMe from '../assets/some-dashboard.png';
import RDLogo from '../assets/RD-logo.png';
import SoMeLogo from '../assets/Some-logo.png';
import HCCLogo from '../assets/HCC-logo.png';
import HCCMag from '../assets/HCC-book.png';
import IllLand from '../assets/illustrated-landing.png';
import IlluLogo from '../assets/illu-logo.png';
import NirvanaLogo from '../assets/nirvana-logo.jpeg';
import NirvanaDash from '../assets/nirvana-dashboard.png';

function About(){
    return(
        <div className={'bg-dark bg-no-repeat bg-cover bg-top min-h-screen flex justify-center items-center flex-wrap'}>
            <div className={'w-full mb-20'}>
                <div id='work-section'/>
                <div className={'flex justify-center text-left pt-32'}>
                <a href='https://www.behance.net/gallery/116952765/Rubber-Duck-Finance' target="blank" className={''}>
                    <div className={'bg-white transform rounded p-5 mx-5 hover:bg-purple-100 transition duration-300 hover:scale-110 flex-1 h-full'}>
                        <img src={RubberDuck} alt='A dashboard ux design for Rubber Duck Finance.' className={'max-w-sm -mt-24'}/>
                        <img src={RDLogo} alt='Rubber Duck Finance logo' className={'mt-5 max-w-xs px-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Finances are tough. Understanding them should be easy.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>UX Design, Branding, Front-End</p>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/116725273/SoMe-Social-Media-Strategy' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={SoMe} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-sm -mt-24'}/>
                        <img src={SoMeLogo} alt='Social Media Strategy logo' className={'mt-20 max-w-xs pr-32 pl-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Streamline, optimize and track your social media presence.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>User Research, Ux Engineer, Front-end</p>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/117105443/Case-Study-Hell-Creek-Cookers-branding' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={HCCMag} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-sm -mt-32'}/>
                        <img src={HCCLogo} alt='Social Media Strategy logo' className={'mt-16 max-w-xs pr-32 pl-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Family owned. Authentic recipes. Culinary-level smoked meats.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>Branding, Logo Design</p>
                    </div>
                    </a>
                </div>
                {/* SECOND LINE */}
                <div className={'flex justify-center text-left pt-48'}>
                <a href='https://www.behance.net/gallery/117671985/Illustrated-Javascript' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={IllLand} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-sm -mt-32'}/>
                        <img src={IlluLogo} alt='Social Media Strategy logo' className={'mt-20 max-w-xs pr-32 pl-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Reshape the way you learn.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>UX Design, Animation</p>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/117864613/Nirvana-Hair-Gallery' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={NirvanaDash} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-sm -mt-32'}/>
                        <img src={NirvanaLogo} alt='Social Media Strategy logo' className={'mt-16 max-w-xs pr-32 pl-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Helping a small business out of the HTML dark ages.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>UI Wireframing</p>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/117671985/Illustrated-Javascript' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-5 hover:bg-purple-100 transition duration-500 hover:scale-110 h-full '}>
                        <img src={IllLand} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-sm -mt-32'}/>
                        <img src={IlluLogo} alt='Social Media Strategy logo' className={'mt-16 max-w-xs pr-32 pl-10'}/>
                        <h4 className={'mt-5 mb-2 font-bold text-xl max-w-xs mx-auto'}>Reshape the way you learn.</h4>
                        <p className={'mb-5 italic text-sm font-thin max-w-xs mx-auto'}>UX Design, Animation</p>
                    </div>
                    </a>
                    </div>
                    </div>
        </div>
    )
}

export default About;