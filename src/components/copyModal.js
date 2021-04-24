import React from 'react';

function copyModal(){

if (!this.props.show){
    return null;
}



return(
<div>
    <button onClick={e => {
        this.showModal();
    }} className={'cursor-pointer'}>jessicawolff.me@gmail.com</button>
</div>
)
}

export default copyModal;