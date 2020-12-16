import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import TimeInput from '../TimeInput/TimeInput'
import Button from "../Button/Button"
import Text from "../Text/Text"
import styles from './index.module.css';
import {fetchSuccess} from "../../actions/user/user"
import {connect} from "react-redux";
import {checkTime} from '../ActivitiesFrame/ChangingElem/ChangingElemFrame/ChangingElemFrame'

function Main(props) {
    const [time, setTime] = useState("");
    let onToActivities =(event) => {
        event.preventDefault();
        
        props.history.push('/activities');
    }
    let onLogout = () => {
        props.dispatch(fetchSuccess({user: null, data: []}))
    }
    return (
            <div className = {styles.mainFrame}>
                <Helmet bodyAttributes={{style: 'background-color : #8797EB'}}/>  
                <div className = {styles.brow}>
                    <Text textStyle={0} color_name={'white'}>#TORELAX</Text>
                    <Button inversed = {true} onClick = {onLogout}>exit</Button>
                </div>    
                <div className = {styles.mainFrame__timer}>
                    <Text textStyle={1} color_name={'white'}> I have</Text>
                    <div className = {styles.circle}>
                        <TimeInput onChange = {(event) => {
                            setTime(event.target.value)
                        }}></TimeInput>
                        <Button buttonStyle = {0} inversed= {true} disabled = {!checkTime(time)} onClick = {
                            () => {
                                props.setRequest({request: time});
                                props.history.push('/response')
                            }
                        }>Submit</Button>
                    </div>
                    <Text textStyle={1} color_name={'white'}>minutes to relax</Text>  
                </div>
                
                <Button onClick = {onToActivities} inversed={true}>
                    Go to my activities
                </Button> 
            </div>
    )
}

export default connect(null)(Main);