import React from 'react';
import styles from './index.module.css';
import Star from './Star'


function Rating({rating}) {
    let colors = ["LIGHTGRAY", "LIGHTGRAY", "LIGHTGRAY", "LIGHTGRAY", "LIGHTGRAY"]
    if (rating >= 0) {
        colors = ["GRAY", "GRAY", "GRAY", "GRAY", "GRAY"];
    }
    for (let i = 0; i < rating; i++) {
        colors[i] = "YELLOW";
    }
    return (
        <div className={styles.wrapper}>
            <Star color = {colors[0]}></Star>
            <Star color = {colors[1]}></Star>
            <Star color = {colors[2]}></Star>
            <Star color = {colors[3]}></Star>
            <Star color = {colors[4]}></Star>
        </div>
    )
}

export default Rating