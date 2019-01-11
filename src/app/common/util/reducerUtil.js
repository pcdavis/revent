/* 
NOTES: This utility comes from the udemy course. It's part of an alternative to using a switch statement in the reducer. 

 Here's how it works using an example of creating an event: 
1. A button click calls the action creator createEvent(event), which sends an action object with type: CREATE_EVENT and a payload event object.  
2. the rootReducer gets pinged with the action object and pings eventReducer, which invokes a function called createReducer that is pre-packed with 2 arguments: the initialState and a lookup table (fnMap). When createReducer runs, those 2 arguments are invoked by an arrow function that returns a new arrow function with two parameters: state, and an object containing type and payload. The state parameter gets filled by the initialState value that came in from the eventReducer and the object gets filled with the action object that got curried along from the original createEvent(event) action creator found in eventActions.jsx. 
3. Finally, the processing begins - the second arrow function asks for value of a variable called handler - which is resolved by using the fnMap lookup table to see if one of its object keys is CREATE_EVENT - ie. fnMap[CREATE_EVENT]. Since it does contain that key, it passes the arguments (state, payload) to the function assigned to the key CREATE_EVENT, which is the createEvent function found in the eventReducer.jsx. When createEvent is invoked with the state and payload arguments, it merges the new payload.event into the state, which then becomes immediately available to all the places in the app that are using the eventReducer state, which is an array of event objects. 

Note - when the app first loads, no actionCreators were called, so fnMap doesn't have any keys that match, causing createReducer to return state by default.
 
*/

export const createReducer = (intialState, fnMap) => {
    return (state= intialState, {type, payload}) => {
        const handler = fnMap[type];

        return handler ? handler(state, payload) : state
    }
}

