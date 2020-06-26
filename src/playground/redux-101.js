import { createStore } from 'redux';

//declares default state count in the argument
// const store = createStore((state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             const increaseAmt = (typeof action.increaseAmt === 'number') ? action.increaseAmt : 1;
//             return {
//                 count: state.count + increaseAmt
//             };
//         case 'DECREMENT':
//             const decreaseAmt = (typeof action.decreaseAmt === 'number') ? action.decreaseAmt : 1;
//             return {
//                 count: state.count - decreaseAmt
//             };
//         case 'RESET':
//             return {
//                 count: 0
//             };
//         case 'SET':
//             return {
//                 count: action.count
//             };
//         default:
//             return state;
//     }
// });


// store.subscribe(() => {
//     console.log(store.getState());
// })
//we can unsubscribe here if we assign it to a variable and return the variable

//=========ACTION=======================
// store.dispatch({
//     type: 'INCREMENT',
//     increaseAmt: 10
// });

// store.dispatch({
//     type: 'INCREMENT',
// });

// store.dispatch({
//     type: 'RESET',
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decreaseAmt: 5
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

const item = ['Ice Coffee (hot)', '$2.00', '$2.50', '$2.75'];

console.log('A medium Coffee (hot) cost $2.50');

const [coffee, , medium,] = item;

console.log(`A medium ${coffee} cost ${medium} `)


//REDUCER is like the state's rules to a store. When happens when an action is called on the store

//reducers should be self reliant aside from the arguments passed in should not interact with any variables / methods
// from outside the function
//NEVER RE-ASSIGN STATE, state always needs an object passed in, just like setState

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.incrementBy };
        case "DECREMENT":
            return { count: state.count - action.decrementBy };
        case "SET":
            return { count: action.count };
        case "RESET":
            return { count: 0 }
    }
}

//creates stores
const store = createStore(countReducer);

//Action Generator
// takes an object , returns an object
// object inside the arguement is deconstructing an object
// does all valid checks in the method, so it doesnt fail when it gets to the cases in store
const incrementBy = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
})

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET"
})

// ==================================================================
store.subscribe(() => {
    console.log(store.getState());
})


// SENDS ACTIONS OR CALLS ACTION GENERATORS =========================
/* An action is something happened, its the job of the reducer to determine what happens to the state */

store.dispatch({
    type: "INCREMENT",
    incrementBy: 6
})

store.dispatch(decrementBy({ decrementBy: 10 }))

store.dispatch(incrementBy());

store.dispatch(setCount({ count: -100 }));

store.dispatch(resetCount());

// const store = createStore((state = {}, action) => {

// })