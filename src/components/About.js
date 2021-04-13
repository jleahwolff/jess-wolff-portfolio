import React from 'react';

function About(){
    return(
        <div className={'bg-dark bg-no-repeat bg-cover bg-top min-h-screen max-h-screen flex justify-center items-center flex-wrap'}>
            <div className={'text-center w-full mb-20'}>
                <h1 className={'font-bold px-2 text-7xl text-white'}>About Me.</h1>
                {/* <h2 className={'mt-2 font-regular px-5 text-xl text-center text-white'}>A Minnesota based UX Engineer visualizing life on the creative side.</h2> */}
                <p className={'font-normal text-md text-white text-justify mx-auto max-w-prose py-10 px-5 '}>
                Jessica is a front-end developer and UX designer specializing in Figma, HTML, CSS, JS and React.
                On the team at The Cultural North, Jessica has helped expand the workload capability by 20% by building comprehensive wireframe prototypes.
                Jessica finds creativity, dedication and organization to be the most valuable qualities for success in her career.  As an alumni of Lambda Schools Full Stack program, she believes the time working in a collaborative setting in a full stack environment was crucial in developing her love for user experience engineering, and the handoff between design and development. 
                When not in front of a computer screen, she enjoys playing beach volleyball, catering to my house plants, and mountain biking with her Australian Shepherd, Bear, and fiance Nick. </p>
            </div>
        </div>
    )
}

export default About;