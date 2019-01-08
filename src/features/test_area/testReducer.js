//Below is the new 'lookup' method of for the reducer that replaces the switch method. It requires a reducerUtil.js module with a createReducer function in there. 

import { createReducer } from '../../app/common/util/reducerUtil'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

const initialState = {
    theData: 346662,
    yoyo: 'yoyo'
}

export const incrementCounter = (state, payload) => {
    return {...state, theData: state.theData + 1};
}

export const decrementCounter = (state, payload) => {
    return {...state, theData: state.theData - 1};
}


//Instead of exporting testReducer, now you export createReducer and pass in 2 args: initial state
export default createReducer( initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
})

//Below is the older Switch way of doing things

// const testReducer = (state=initialState, action) => {
//     switch(action.type){
//         case INCREMENT_COUNTER:
//         return {...state, theData: state.theData +1}
//         case DECREMENT_COUNTER:
//         return {...state, theData: state.theData - 1}
//         default:
//         return state;
//     }
// }