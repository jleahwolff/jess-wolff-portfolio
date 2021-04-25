import React, {useState} from "react";
import Linkedin from '../assets/Vector.svg';
import Github from '../assets/Twitter.svg';
import Behance from '../assets/behance-logo.svg';
import Medium from '../assets/medium-logo.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Contact() {
const [copied, setCopied] = useState(false)

const emailAddress = 'jessicawolff.me@gmail.com'

return (
    <div className={'bg-gradient-to-b from-purple-700 to-purple-500 min-h-full flex justify-center items-center flex-wrap'}>
        <div id='contact-section'/>
        <h1 className={'font-bold px-2 text-7xl text-white w-full text-center py-10'}>Contact.</h1>
            <div className={'text-xl pb-20'}>
            <div className={'flex items-center justify-center'}>
            <a href='https://www.behance.net/jesswolff' target="blank"><img alt='Behance link' className={'p-3'} src={Behance}/></a>
            <a href='https://www.linkedin.com/in/jwolff2/' target="blank"><img alt='Linkedin link' className={'p-3'} src={Linkedin}/></a>
            <a href='https://github.com/jleahwolff' target="blank"><img alt='Github link' className={'p-3'} src={Github}/></a>
            <a href='https://jleahwolff.medium.com/' target="blank"><img alt='Github link' className={'p-3'} src={Medium}/></a>
            </div>
            <div className={'flex items-center justify-center pt-5'}>
            <h5 className={'text-white'}>Send an email to &nbsp;</h5>
            {
                copied ? <div className={'font-bold cursor-pointer text-purple-300'}>Copied!</div>
                :
                <CopyToClipboard text={emailAddress} onCopy ={() => setCopied(true)}>
                    <div className={'cursor-pointer text-purple-200 underline'}>jessicawolff.me@gmail.com</div>
                </CopyToClipboard>
            }
            </div>
            </div>
    </div>
)
}

export default Contact;