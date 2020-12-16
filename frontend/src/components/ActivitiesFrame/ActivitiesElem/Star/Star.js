import React from 'react';
import styles from './index.module.css';

function Star({color, onClick}) {
    let theme;
    switch (color) {
        case "GRAY":
            theme = styles.gray;
            break;
        case "YELLOW":
            theme = styles.yellow;
            break;   
        default:
            theme = styles.gray;
    }
    return (
        <div className={theme}>
            <span className = {styles.star} onClick = {onClick}>&#9733;</span>
        </div>
    )
}

export default Star