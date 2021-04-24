import React, {useState, useEffect} from "react";
import Linkedin from '../assets/Vector.svg';
import Email from '../assets/email.svg';
import Github from '../assets/Twitter.svg';
import copyModal from './copyModal';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Contact() {
const [copy, setCopy] = useState(false);

const copyText = () => {
    setCopy(true);
    setTimeout(() => {
        setCopy(false)
    }, 1000)

}

return (
    <div className={'bg-gradient-to-b from-purple-700 to-purple-500 min-h-full flex justify-center items-center flex-wrap'}>
            <div className={'flex py-10'}>
            <a href='https://www.linkedin.com/in/jwolff2/' target="blank"><img alt='Linkedin link' className={'p-5'} src={Linkedin}/></a>
            <a href='https://github.com/jleahwolff' target="blank"><img alt='Github link' className={'p-5'} src={Github}/></a>
            {/* <button onClick='copyClipboard()'><img alt='Email link' id='email-address' className={'p-5'} src={Email}/></button> */}
            {/* <button onClick={handleCopy} className={'cursor-pointer'} id='email-button'><h5 id='email-address'>jessicawolff.me@gmail.com</h5></button> */}
            {/* <copyModal show={showModal}/> */}
            <CopyToClipboard text='jessicawolff.me@gmail.com' onCopy={copyText}>
                <div className={''}>
                    <button><img alt='Email link' id='email-address' className={'p-5'} src={Email}/></button>
                    <span className={`copy-feedback ${copy ? "active" : ""}`}> Email Copied!</span>
                </div>
            </CopyToClipboard>
            </div>
    </div>
)
}

export default Contact;