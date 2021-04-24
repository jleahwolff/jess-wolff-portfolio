import React, {useState, useEffect} from "react";
import Linkedin from '../assets/Vector.svg';
// import Email from '../assets/email.svg';
import Github from '../assets/Twitter.svg';
import copyModal from './copyModal';


function Contact() {



// ATTEMPT 2
    // function handleCopy(){
    //     const el = document.querySelector('#email-address');
    //     el.focus();
    //     el.setSelectionRange(0, el.textContent.length);
    //     // el.select()
    //     console.log(el.textContent, 'jess wolff email')
    //     document.execCommand('copy');
    // }
    // ATTEMPT 1
    // function handleCopy(){
    //     var copyText = document.querySelector('#email-address');
    //     copyText.select();
    //     document.execCommand('copy');
    //     // e.preventDefault();
    //     console.log('copied email was clicked')
    //     alert('copied content');
    // }
    // document.querySelector('#email-address').addEventListener('click', handleCopy)



return (
    <div className={'bg-gradient-to-b from-purple-700 to-purple-500 min-h-full flex justify-center items-center flex-wrap'}>
            <div className={'flex py-10'}>
            <a href='https://www.linkedin.com/in/jwolff2/' target="blank"><img alt='Linkedin link' className={'p-5'} src={Linkedin}/></a>
            <a href='https://github.com/jleahwolff' target="blank"><img alt='Github link' className={'p-5'} src={Github}/></a>
            {/* <button onClick='copyClipboard()'><img alt='Email link' id='email-address' className={'p-5'} src={Email}/></button> */}
            {/* <button onClick={handleCopy} className={'cursor-pointer'} id='email-button'><h5 id='email-address'>jessicawolff.me@gmail.com</h5></button> */}
            {/* <copyModal show={showModal}/> */}
            </div>
    </div>
)
}

export default Contact;