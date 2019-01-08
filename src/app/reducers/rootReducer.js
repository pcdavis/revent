import { CombineReducers, combineReducers } from 'redux';
import testReducer from "../../features/test_area/testReducer";

const rootReducer = combineReducers({
    propKeyfromRoot: testReducer

})

export default rootReducer;