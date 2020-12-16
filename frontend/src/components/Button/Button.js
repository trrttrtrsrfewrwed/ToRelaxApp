import React from "react";
import classnames from 'classnames'
import styles from "./index.module.css";

function Button({children, buttonStyle, inversed, onClick, disabled}) {
    let button_style;
    switch(buttonStyle) {
        case 0: 
            button_style = styles.button0;
            break;
        case 1:
            button_style = styles.button1;
            break;
        case 2:
            button_style = styles.button2;
            break;
        default:
            button_style = styles.button0;    
    }

    const className = classnames(button_style, {
        [styles.inversed]: !!inversed
      });
    return (
        <button className={className} onClick={onClick} disabled = {disabled}>{children}</button>
    )
}


export default Button