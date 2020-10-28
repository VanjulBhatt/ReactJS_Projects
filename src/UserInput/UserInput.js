import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div>
            <input onChange={props.changeHandler} value={props.name} type ="text"></input>
        </div>
    );
}

export default UserInput;