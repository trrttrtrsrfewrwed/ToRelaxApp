import React from 'react';
import styles from './index.module.css';
import changingElemReducer from '../../../reducers/activities/changingElem'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ChangingElemFrame from '../ChangingElem/ChangingElemFrame/ChangingElemFrame'


function ChangingElem({onCancel, onSubmit, data}) {
    const store = createStore(changingElemReducer, 
        {rating: data.rating,
        category: data.category, 
        duration: data.time,
        description: data.description,
        name: data.name})
    return (
        <Provider store={store}>
            <div className={styles.container} onClick = {(event) => {
                if (event.target == event.currentTarget) {
                    onCancel()
                }
            }}>
                <ChangingElemFrame onCancel = {onCancel} onSubmit = {onSubmit}/>
            </div>
        </Provider>
    )
}

export default ChangingElem