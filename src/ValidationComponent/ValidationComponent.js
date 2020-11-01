import React from 'react';

const ValidationComponent = (props) => {
let message = null;
    if(props.textLength < 5){
        message = (<p>Text Too Short</p>);
    }else if(props.textLength > 15){
        message = (<p>Text Too Long</p>);
    }
return (
    <div>
    {message}
    </div>
 );
}
export default ValidationComponent;