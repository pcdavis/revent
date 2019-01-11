import {INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: 2
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}