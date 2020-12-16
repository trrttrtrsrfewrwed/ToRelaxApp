import React from 'react';
import styles from './index.module.css';
import Text from '../../Text/Text'
import Rating from './Star/Rating';
import Button from '../../Button/Button'


function timeRepresentation(time) {
    return time;
}

function ActivitiesElem({props, expand, change, remove, contract}) {
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

    const onMaximize = (event) => {
        expand(id);
    }
    const onMinimize = (event) => {
        contract(id);
    }
    if (minimized === true) {
        return (
            <form className = {styles.wrapper} style={{ backgroundColor: color}} onClick = {onMaximize}>
                <div className = {styles.brow}>
                    <Text textStyle = {2} color_name = {'#FFFFFF'}>{name}</Text>
                    <Rating rating={rating}></Rating>
                </div>
            </form>
            )
    } else {
        return (
            <form className = {styles.wrapper} style={{border: '0.5vh solid', borderColor: color}} onClick = {onMinimize}>
                <div className = {styles.brow}>
                    <Text textStyle = {2} color_name = {color}>{name}</Text>
                    <Rating rating={rating}></Rating>
                </div>
                <div className = {styles.brow}>
                    <Text textStyle = {3} color_name = {color}>{description}</Text>
                    <Text textStyle = {1} color_name = {color}>{timeRepresentation(time)}</Text>
                </div>
                <div className = {styles.last_brow}>
                    <Button buttonStyle={1} onClick = {change}>Change</Button>
                    <Button buttonStyle={1} onClick = {remove}>Delete</Button>
            </div>
            </form>
            )
    }

}

export default ActivitiesElem