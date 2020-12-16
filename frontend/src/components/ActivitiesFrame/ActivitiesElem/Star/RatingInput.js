import React from 'react';
import styles from './index.module.css';
import Star from './Star'
import {connect} from 'react-redux'
import {fetchCHANGERATING} from '../../../../actions/activities/changingElem'

function RatingInput(props) {
    const cnt = props.rating

    let colors = ["GRAY", "GRAY", "GRAY", "GRAY", "GRAY"]
    for (let i = 0; i < cnt; i++) {
        colors[i] = "YELLOW";
    }
    
    const onChange = (value) => {
        props.dispatch(fetchCHANGERATING(value))
    }

    return (
        <div className={styles.input_wrapper}>
            <Star color = {colors[0]} onClick = {() => onChange(1)}></Star>
            <Star color = {colors[1]} onClick = {() => onChange(2)}></Star>
            <Star color = {colors[2]} onClick = {() => onChange(3)}></Star>
            <Star color = {colors[3]} onClick = {() => onChange(4)}></Star>
            <Star color = {colors[4]} onClick = {() => onChange(5)}></Star>
        </div>
    )
}

const mapStateToProps = function(store) {
    return {rating: store.rating}
}

export default connect(mapStateToProps)(RatingInput)