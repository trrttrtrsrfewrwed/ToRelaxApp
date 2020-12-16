import React from 'react';
import styles from './index.module.css';
import Point from '../ChoosingCategory/Point/Point'
import Text from '../../Text/Text'


function ChoosingCategory({category, changeCategory}) {
    let picked = [false, false, false, false];
    switch (category) {
        case "active":
            picked[0] = true;
            break;
        case "collective":
            picked[1] = true;
            break;
        case "outdoors":
            picked[2] = true;
            break;
        default:
            picked[3] = true;  
    }
    let changeCat = (category) => {
        console.log("click")
        changeCategory(category)
    }
    return (
        <div>
            <div className = {styles.brow} onClick = {()=>{changeCat("active")}}>
                <Point color = {'#8797EB'} picked = {picked[0]} /> 
                <Text textStyle = {3} color_name = {"blue"}>active</Text>
            </div>
            <div className = {styles.brow} onClick = {()=>{changeCat("collective")}}>
                <Point color = {'#6FCF97'} picked = {picked[1]} /> 
                <Text textStyle = {3} color_name = {"blue"}>collective</Text>
            </div>
            <div className = {styles.brow} onClick = {()=>{changeCat("outdoors")}}>
                <Point color = {'#BB6BD9'} picked = {picked[2]} /> 
                <Text textStyle = {3} color_name = {"blue"}>outdoors</Text>
            </div>
            <div className = {styles.brow}  onClick = {()=>{changeCat("default")}}>
                <Point color = {'#65e0b5'} picked = {picked[3]}/> 
                <Text textStyle = {3} color_name = {"gray"}>default</Text>
            </div>
            
        </div>
    )
}

export default ChoosingCategory