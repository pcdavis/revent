import { combineReducers } from 'redux';
import testReducer from "../../features/test_area/testReducer";
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
    propKeyfromRoot: testReducer,
    events: eventReducer

})

export default rootReducer;