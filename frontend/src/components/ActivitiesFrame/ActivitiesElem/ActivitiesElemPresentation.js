import React from 'react';
import styles from './index.module.css';
import Text from '../../Text/Text'
import Rating from './Star/Rating';
import Button from '../../Button/Button'
import classnames from 'classnames'

function timeRepresentation(time) {
    return time;
}

function ActivitiesElemPresentation({props, moving, delay}) {
    const { 
        id,
        name,
        category,
        description,
        time,
        rating,
        minimized
    } = props;

    let color;
    switch (category) {
        case "active":
            color = '#8797EB';
            break;
        case "collective":
            color = '#6FCF97';
            break;
        case "outdoors":
            color = '#BB6BD9';
            break;
        default:
            color = '#65e0b5';    
    }
    if (moving) {
        return (
            <form  style={{border: '0.5vh solid', borderColor: color, transitionDelay: delay + "ms"}} className = {classnames(styles.wrapper, styles.moving)}>
                <div className = {styles.brow}>
                    <Text textStyle = {2} color_name = {color}>{name}</Text>
                    <Rating rating={rating}></Rating>
                </div>
                <div className = {styles.brow}>
                    <Text textStyle = {3} color_name = {color}>{description}</Text>
                    <Text textStyle = {1} color_name = {color}>{timeRepresentation(time)}</Text>
                </div>
            </form>
        )
    } else {
        return (
            <form className = {styles.wrapper, styles.start} style={{border: '0.5vh solid', borderColor: color}}>
                <div className = {styles.brow}>
                    <Text textStyle = {2} color_name = {color}>{name}</Text>
                    <Rating rating={rating}></Rating>
                </div>
                <div className = {styles.brow}>
                    <Text textStyle = {3} color_name = {color}>{description}</Text>
                    <Text textStyle = {1} color_name = {color}>{timeRepresentation(time)}</Text>
                </div>
            </form>
        )
    }

}

export default ActivitiesElemPresentation