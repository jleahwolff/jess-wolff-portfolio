import React from 'react';

import RubberDuck from '../assets/rubber-duck.png';
// import SoMe from '../assets/some-dashboard.png';
import RDLogo from '../assets/RD-logo.png';
import SoMeLogo from '../assets/Some-logo.png';
import HCCLogo from '../assets/HCC-logo.png';
import HCCMag from '../assets/HCC-book.png';
import IllLand from '../assets/illustrated-landing.png';
import IlluLogo from '../assets/illu-logo.png';
import NirvanaLogo from '../assets/nirvana-logo.jpeg';
import NirvanaDash from '../assets/nirvana-dashboard.png';
import SoMe from '../assets/some.png';


function About(){
    return(
        <div className={'bg-dark bg-no-repeat bg-cover bg-top min-h-screen flex justify-center items-center flex-wrap'}>
            <div className={'w-full mb-20'}>
                <div id='work-section'/>
                <div className={'flex justify-center text-left pt-32'}>
                <a href='https://www.behance.net/gallery/116952765/Rubber-Duck-Finance' target="blank" className={''}>
                    <div className={'w-72 mx-2 flex flex-col justify-between min-h-full bg-white rounded transform hover:bg-sunset-100 transition duration-500 hover:scale-95'}>
                        <div className={'ml-5 mt-5'}>
                        <img src={RDLogo} alt='Rubber Duck Finance logo' className={'max-w-xs pr-36'}/>
                        <p className={'text-xs font-bold text-sunset-200 max-w-xs mx-auto pt-2'}>CORE PRODUCT DESIGN</p>
                        </div>
                        <div className={'flex justify-end pt-2'}>
                        <img src={RubberDuck} alt='A dashboard ux design for Rubber Duck Finance.' className={'w-8/12'}/>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/116725273/SoMe-Social-Media-Strategy' target="blank">
                    <div className={'w-72 mx-2 flex flex-col justify-between min-h-full bg-white rounded transform hover:bg-sunset-100 transition duration-500 hover:scale-95'}>
                        <div className={'ml-5 mt-5'}>
                        <img src={SoMeLogo} alt='Social Media Strategy logo' className={'max-w-xs pr-52'}/>
                        <p className={'text-xs font-bold text-sunset-200 max-w-xs mx-auto pt-2'}>USER RESEARCH, FE</p>
                        </div>
                        <div className={'flex justify-end pt-2'}>
                        <img src={SoMe} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'w-8/12'}/>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/117105443/Case-Study-Hell-Creek-Cookers-branding' target="blank">
                    <div className={'w-72 mx-2 flex flex-col justify-between min-h-full bg-white rounded transform hover:bg-sunset-100 transition duration-500 hover:scale-95'}>
                        <div className={'ml-5 mt-5'}>
                        <img src={HCCLogo} alt='Hell Creek Cookers logo' className={'max-w-xs pr-52'}/>
                        <p className={'text-xs font-bold text-sunset-200 max-w-xs mx-auto pt-2'}>BRANDING</p>
                        </div>
                        <div className={'flex justify-center'}>
                        <img src={HCCMag} alt='Hell Creek Cookers logo book' className={'w-11/12'}/>
                        </div>
                    </div>
                    </a>
                </div>
                {/* SECOND LINE */}
                <div className={'flex justify-center text-left pt-4'}>
                <a href='https://www.behance.net/gallery/117671985/Illustrated-Javascript' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-2 hover:bg-purple-100 transition duration-500 hover:scale-95 h-full flex flex-col justify-between'}>
                        <div>
                        <img src={IllLand} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-xs'}/>
                        </div>
                        <div>
                        <img src={IlluLogo} alt='Social Media Strategy logo' className={'max-w-xs pr-44 pt-5 pb-2'}/>
                        <p className={'mb-2 italic text-sm font-thin max-w-xs mx-auto'}>UX Design, Animation</p>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.behance.net/gallery/117864613/Nirvana-Hair-Gallery' target="blank">
                    <div className={'transform bg-white rounded p-5 mx-2 hover:bg-purple-100 transition duration-500 hover:scale-95 h-full '}>
                        <img src={NirvanaDash} alt='A dashboard of SoMe: Social Media Strategy on a Macbook Pro. UX Design' className={'max-w-xs'}/>
                        <div>
                        <img src={NirvanaLogo} alt='Social Media Strategy logo' className={'max-w-xs pr-52 pt-5 pb-2'}/>
                        <p className={'mb-2 italic text-sm font-thin max-w-xs mx-auto'}>UI Wireframing</p>
                        </div>
                    </div>
                    </a>

                    <a href='https://www.behance.net/gallery/117671985/Illustrated-Javascript' target="blank">
                    <div className={'w-72 mx-2 flex flex-col justify-between min-h-full bg-white rounded transform hover:bg-purple-100 transition duration-500 hover:scale-95'}>
                        <div className={'ml-5 mt-5'}>
                        <img src={IlluLogo} alt='Social Media Strategy logo' className={'max-w-xs pr-44'}/>
                        <p className={'mt-2 italic text-sm font-thin'}>UX Design, Animation</p>
                        </div>
                        <div className={'flex justify-end'}>
                        <img src={IlluLogo} alt='A snippet view of Rubber Duck Finance' className={'w-9/12'}/>
                        </div>
                    </div>
                    </a>
                    </div>
                    </div>
        </div>
    )
}

export default About;