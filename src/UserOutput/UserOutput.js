import React from 'react';

const UserOutput = (props) => {

    const pStyle = {
        color: 'black'
    };
    return (
        <div>
            <p style={pStyle}>My First Name is : {props.name}</p>
            <p>My SurName is :</p>
       </div>
    );
}

export default UserOutput;