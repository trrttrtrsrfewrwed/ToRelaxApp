import React from 'react';
import styles from './index.module.css';
import Input from '../../../Input/Input'
import RatingInput from '../../ActivitiesElem/Star/RatingInput';
import Text from '../../../Text/Text'
import {connect} from 'react-redux'
import {fetchCHANGECATEGORY, fetchCHANGEDESCRIPTION, fetchCHANGEDURATION, fetchCHANGENAME} from '../../../../actions/activities/changingElem'
import ChoosingCategory from '../../ChoosingCategory/ChoosingCategory';
import TimeInput from '../../../TimeInput/TimeInput'
import Button from '../../../Button/Button'

export function checkTime(time) {
    if (time.length !== 5) {
        return false;
    }
    let pattern=/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/
    return pattern.test(time)
}

function checkReady(store) {
    if (store.name === "") {
        return false;
    }
    return checkTime(store.duration)
}

function ChangingElemFrame(props) {
    console.log(props.store)
    let valid = checkReady(props.store)
    let color;
    switch (props.category) {
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
    let changeCategory = (category) => {
        props.dispatch(fetchCHANGECATEGORY(category))
    }

    let changeName = (name) => {
        props.dispatch(fetchCHANGENAME(name))
    }

    let changeDuration = (duration) => {
        props.dispatch(fetchCHANGEDURATION(duration))
    }
    let changeDescription = (description) => {
        props.dispatch(fetchCHANGEDESCRIPTION(description))
    }
    return (
        <div className = {styles.frame} style={{border: '0.5vh solid', borderColor: color}}>
            <div className = {styles.brow}>
                <Input placeholder="Enter name" inputStyle = {1} onChange = {(event) => {
                    changeName(event.target.value)
                }} value = {props.store.name}/>
                <RatingInput></RatingInput>
            </div>
            <div className = {styles.brow}>
                <div>
                    <Text textStyle = {3} color_name = {"gray"}>Choose category:</Text>
                    <ChoosingCategory category = {props.category} changeCategory = {changeCategory}/>
                </div>
                <div className = {styles.duration}>
                    <Text textStyle = {3} color_name = {"gray"}>Enter activity duration:</Text>
                    <div className = {styles.timeInput}>
                        <TimeInput onChange = {(event) => {
                            changeDuration(event.target.value)
                        }}
                        value = {props.store.duration}></TimeInput>
                    </div>
                    <Text textStyle = {3} color_name = {"gray"}>(from 00:00 to 23:59)</Text>
                </div>
            </div>
            <div>
                <Text textStyle = {3} color_name = {"gray"}>Enter description:</Text>
                <textarea className = {styles.textArea} onChange = {(event) => {
                            changeDescription(event.target.value)
                        }} value = {props.store.description}></textarea>
            </div>    
            <div className = {styles.last_brow}>
                <Button buttonStyle={1} onClick = {props.onCancel}>Cancel</Button>
                <Button buttonStyle={1} disabled = {!valid} onClick = {() => props.onSubmit(props.store)}>Submit</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {category: store.category,
            store: store}
}

export default connect(mapStateToProps)(ChangingElemFrame)
