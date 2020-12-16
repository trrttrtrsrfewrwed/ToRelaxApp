import React from 'react';

function Point({color, picked, onClick}) {
    if (picked === true) {
        return (
            <span onClick = {onClick} style={{border: '0.5vh solid', width: "6px", height: "6px", borderRadius: "50%", borderColor: color, display: "inline-block", backgroundColor: "white"}}/>
        )
    } else {
        return (
            <span onClick = {onClick} style={{border: '0.5vh solid', width: "6px", height: "6px", borderRadius: "50%", borderColor: color, display: "inline-block", backgroundColor: color}}/>
        )
    }
}

export default Point