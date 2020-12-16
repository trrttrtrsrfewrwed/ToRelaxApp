import {Provider} from 'react-redux'
import {connect} from "react-redux";
import ActivitiesElemPresentation from '../ActivitiesFrame/ActivitiesElem/ActivitiesElemPresentation'  
import styles from './index.module.css';
import React, {useState, useEffect} from 'react';
import Text from '../Text/Text'
import Button from '../Button/Button'
import classnames from 'classnames'

function getTime(minutes) {
    let h = Math.floor(minutes/60);
    let m = minutes % 60;
    let white = ""
    return h.toString() + "h" + " " + m.toString() + "m";
}

function getMinutes(time) {
    return parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3, 5));
}

function getResponse(data, request) {
    return getMax(data, getMinutes(request));
}

function getMax(data, minutes) {
    if (data.length === 0) {
        return {
            data: [],
            sum: 0
        };
    }
    let max_sum = 0;
    let max_data = [];
    data.forEach((item, index, array)=> {
        let curr_data = data.slice();
        let removed = curr_data.splice(index, 1);
        let curr_minutes = getMinutes(removed[0].time);
        if (curr_minutes <= minutes) {
             let curr = getMax(curr_data, minutes - getMinutes(removed[0].time))
            if (curr.sum + removed[0].rating * curr_minutes > max_sum) {
                max_sum = curr.sum + removed[0].rating * curr_minutes; 
                max_data = removed.concat(curr.data)
            }
        }
    });
    return {
        data: max_data,
        sum: max_sum
    };
}



function Response(props) {
    const [move, setMove] = useState(false)
    useEffect(() => {
        setMove(true)
      }, []);

    const request = props.request.request
    // WARNING!!! VERY BAD REALISATION
    const resp = getResponse(props.data, request)
    const response = resp.data
    const satisfaction = resp.sum / (getMinutes(request) * 5)

    let onToActivities =(event) => {
        event.preventDefault();
        
        props.history.push('/activities');
    }
    let onToMain =(event) => {
        event.preventDefault();
        
        props.history.push('/');
    }
    

    let colors = ["#BABABA", "#BABABA", "#BABABA", "#BABABA", "#BABABA"]
    for (let i = 0; i <= satisfaction * 4; i++) {
        colors[i] = "#FBFF4E";
    }

    let minutes = 0;
    for (let i = 0; i < response.length; i++) {
        minutes += getMinutes(response[i].time);
    }
    return (
        <div className = {styles.mainFrame}>
            <Text textStyle={0} color_name={'blue'}>RELAX</Text>
            <div>
                <div className = {styles.fullTime}>
                    <Text textStyle = {2}>{getTime(getMinutes(request))}</Text>
                </div>
                <div className = {styles.startTime}>
                    <Text textStyle = {2}>{getTime(0)}</Text>
                </div>
                <div className = {styles.ruler}>
                <svg width="46" height="433" viewBox="0 0 46 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 424.983H0" stroke="black" stroke-width="4"/>
                    <path d="M30 324.983H0" stroke="black" stroke-width="4"/>
                    <path d="M30 224.983H0" stroke="black" stroke-width="4"/>
                    <path d="M30 125.983H0" stroke="black" stroke-width="4"/>
                    <path d="M30 357.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 257.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 157.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 390.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 290.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 190.983H15" stroke="black" stroke-width="2"/>
                    <path d="M30 36H0" stroke="black" stroke-width="4"/>
                    <path d="M30 68H15" stroke="black" stroke-width="2"/>
                    <path d="M30 101H15" stroke="black" stroke-width="2"/>
                    <rect x="29" y="431.981" width="431.984" height="15" transform="rotate(-89.7869 29 431.981)" fill="#BDBDBD"/>
                </svg>

                </div>
                <div className = {styles.activities_list}>
                    <div className = {styles.time}>
                        <Text textStyle = {2} color_name={"blue"}>{getTime(minutes)}</Text>
                    </div>
                    <div className = {styles.hat} style =  {{transitionDuration: "0.5s", transitionDelay: 100 + 100 * response.length + "ms", transform: move && "translateX(-30px) translateY(0px)"}}>
                        <svg width="122" height="27" viewBox="0 0 122 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="25" height="27" fill="#828282"/>
                            <path d="M23 6.5L121.5 17.5V27H23V6.5Z" fill="#828282"/>
                        </svg>
                    </div>
                    {response.map((elem, index, array) =>
                        <ActivitiesElemPresentation key = {elem.id} props={elem} moving = {move} delay = {100 * (array.length - index)}> 
                        </ActivitiesElemPresentation>
                    )} 
                </div>
                <div className = {styles.scales}>
                        <div className = {styles.arrow}  style =  {{transitionDuration: 0.5 * satisfaction + "s", transitionDelay: 100 + 100 * response.length + "ms", transform: move && "translateX(-110%) translateY(-30px) rotate(" + satisfaction * 180 + "deg)"}}>
                            <svg width="71" height="14" viewBox="0 0 71 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.2667L0 4.2L71 -5.96046e-08V14L0 10.2667Z" fill="#FF0000"/>
                            </svg>
                        </div>
                        <svg width="335" height="165" viewBox="0 0 335 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5442 24L8.434e-06 68.5263L0 165L335 165L335 68.5263L312.801 24L23.5442 24Z" fill="#828282"/>
                            <path d="M159 61C108.19 61 67 102.638 67 154H251C251 102.638 209.81 61 159 61Z" fill="#F2F2F2"/>
                            <rect x="153" y="66" width="7" height="18" fill="#333333"/>
                            <rect x="95.7709" y="94.7069" width="6.71741" height="18.8087" transform="rotate(-45 95.7709 94.7069)" fill="#333333"/>
                            <rect x="73" y="150" width="6" height="19" transform="rotate(-90 73 150)" fill="#333333"/>
                            <rect x="219.236" y="89.957" width="6.71741" height="18.8087" transform="rotate(45 219.236 89.957)" fill="#333333"/>
                            <rect x="247" y="144" width="6" height="19" transform="rotate(90 247 144)" fill="#333333"/>
                            <path d="M52 131L54.9187 139.637H64.3637L56.7225 144.975L59.6412 153.613L52 148.275L44.3588 153.613L47.2775 144.975L39.6363 139.637H49.0813L52 131Z" fill={colors[0]}/>
                            <path d="M82 63L84.9187 71.9828H94.3637L86.7225 77.5344L89.6412 86.5172L82 80.9656L74.3588 86.5172L77.2775 77.5344L69.6363 71.9828H79.0813L82 63Z" fill={colors[1]}/>
                            <path d="M157 32L159.919 41.3283H169.364L161.723 47.0935L164.641 56.4217L157 50.6565L149.359 56.4217L152.277 47.0935L144.636 41.3283H154.081L157 32Z" fill={colors[2]}/>
                            <path d="M242 63L244.919 71.9828H254.364L246.723 77.5344L249.641 86.5172L242 80.9656L234.359 86.5172L237.277 77.5344L229.636 71.9828H239.081L242 63Z" fill={colors[3]}/>
                            <path d="M267 131L269.919 139.637H279.364L271.723 144.975L274.641 153.613L267 148.275L259.359 153.613L262.277 144.975L254.636 139.637H264.081L267 131Z" fill={colors[4]}/>
                            <rect x="7" width="321" height="20" fill="#828282"/>
                        </svg>
                    </div>
            </div>
            <div className = {styles.column}>
                <Button onClick = {onToMain} inversed={true}>
                        Override relax time
                </Button> 
                <Button onClick = {onToActivities} inversed={false}>
                        Go to my activities
                </Button> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      data: state.data    
    }
  };

export default connect(mapStateToProps)(Response)