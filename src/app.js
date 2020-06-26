//IMPORT LIBRARIES AND CSS =====================================================
import React from 'react';
import { Provider } from 'react-redux'; //provides store to all our component
//IMPORT for ReactDOM.render=========================================================
import ReactDOM from 'react-dom';

// CSS =========================================================================
import 'normalize.css/normalize.css';
import './styles/styles.scss'

//IMPORT JAVASCRIPT ===========================================================
import AppRouter from './routers/AppRouters.js';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// require('./styles/style.css')

//Function configureStore returns a store object
const store = configureStore();

//ADDING EXPENSES TO STATE ======================================
store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 10 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 700, createdAt: 20 }));
store.dispatch(addExpense({ description: 'Car bill', amount: 1200, createdAt: 100 }));
store.dispatch(addExpense({ description: 'House bill', amount: 10, createdAt: 102 }));

//SETTING SEARCH FILTER ========================================
store.dispatch(setTextFilter('water'));

//GETTING RESULT OF SEARCH FILTER ==============================
const state = store.getState();
console.log('state expenses', state.expenses);
// array of expense objects

console.log('filters', state.filters);
// an object with key:value 
console.log(getVisibleExpenses(state.expenses, state.filters));


setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//we can pass in props to the main app through here. {} is the JSX brackets, not an object literal
ReactDOM.render(jsx, document.getElementById('app'));







// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//     }
//      getGreeting(){
//      return 'Hello my nmame is ' + this.name
//}
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// //-----------------------------------------------

// class NewSyntax {
//     name = "Jen";
//  getGreeting = () => {
//      return 'Hi My name is'  + this.name // wont need to rebind with this.getGreeting = this.getGreeting.bind(this);
//}
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);




//Child classes template can access this.props without having to super(props)
//Child classes methods cannot access this.props and needs to super(props) so you can use "this" in methods

//methods also need to be rebound through this_methodName = this_methodName.bind(this);

//Parent class will hold methods that alter state and pass them down through props to the child classes where the child can access the trigger
//to call the method. Child class methods will also do the computing to return the argument needed to the parent class for use.
//For example <AddOption /> returns an option through handlerAddOption to the main class for it to be added into the state.

//State is used for variables that constantly change. State also in the back's job is to re-render the template after changing the state.
//We can alter the state by using .setState(anon-function) which returns an object and the object is used to alter the state

//stateless function component --- is a function that acts like the class but simplified. It is a component that holds no state, which means 
//it is just used for rendering 
//  const Component = (props) => {
//      return ( <div>props.name</div>)    
//  }
// we do not have to use this.props.name that is only for classes









//====================WEBPACK NOTES =============================================//

//install --> import --> use

//(install step)ex.yarn / npm install validator
//(import step) read the docs on how to import 
// var validator = require('validator')  | import validator from 'validator'

// import validator from 'validator';
// console.log(validator.isEmail('brianbui012@gmail.com'));



// // import './utils.js'

// //now saying import sqaure reference from utils
// import sub, { square, add } from './utils.js';
// import isSenior, { isAdult, canDrink } from './person.js';
// console.log('app.js is running');

// //we cannot use square because we did not declare square variable on this doc.



// // console.log(isAdult(19));
// // console.log(canDrink(19));


// console.log(isSenior(50));