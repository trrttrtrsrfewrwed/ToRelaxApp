import { combineReducers } from 'redux'

import activitiesListReducer from './activities/activitiesList'

const rootReducer = combineReducers({
    activitiesListReducer
});

export default rootReducer