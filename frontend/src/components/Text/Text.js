import React from "react";
import styles from "./index.module.css";

function Text({children, textStyle, color_name}) {
    let text_style;
    switch(textStyle) {
        case 0: 
            text_style = styles.main;
            break;
        case 1:
            text_style = styles.secondary;
            break;
        case 2:
            text_style = styles.activity_name;
            break;    
        case 3:
            text_style = styles.activity_text;
            break;        
        default:
            text_style = styles.secondary;    
    }
    let color;
    switch (color_name) {
        case "blue":
            color = '#8797EB';
            break;
        case "green":
            color = '#6FCF97';
            break;
        case "purple":
            color = '#BB6BD9';
            break;
        case "white":
            color = '#FFFFFF';
            break;
        case "gray":
            color = '#a9a9a9';
            break;
        default:
            color = color_name;    
    }
    return (
        <h1 className={text_style} style={{color: color}}>{children}</h1>
    )
}


export default Text