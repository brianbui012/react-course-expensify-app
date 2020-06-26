import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


//Add_EXPENSE
//Action Generator Function
const addExpense = (
    { description = "",
        notes = "",
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        notes,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


// ACTION GENERATOR : FILTERS 

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const setStartDate = (startDate = undefined) => ({
    type: "START_DATE",
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: "END_DATE",
    endDate
});

const searchText = (text = undefined) => ({
    type: "TEXT",
    text: text.toLowerCase()
})


//combineReducers is because reducers could increase in size. For the state count, was just one state, if we had two states like count and size the function could be really large, we need to break it up.

//Expenses Reducer

// State ======================================================================
const expensesReducerDefaultState = [];

// Reducer =====================================================================
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //{type: 'ADD_EXPENSE', expense: {description: "", notes: "", etc}}
            return [...state, action.expense]; //...state are the previous Objects, item 1, 2,etc and action.expense is the new object
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id
            });
        case 'EDIT_EXPENSE':
            // console.log('action', action); // {type: 'EDIT_EXPENSE' , id: "____", updates: {amount: 900}}
            // console.log('state', state);
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return ({ ...expense, ...action.updates })
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};


//State =========================================================================
const filtersReducerDefaultState = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//Reducer ========================================================================
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_DATE':
            // console.log('here', action)
            return { ...state, sortBy: action.sortBy };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: action.sortBy };
        case 'START_DATE':
            return { ...state, startDate: action.startDate };
        case 'END_DATE':
            return { ...state, endDate: action.endDate };
        case "TEXT":
            return { ...state, text: action.text };
        default:
            return state;
    }
};


//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = (expense.description.toLowerCase()).includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : - 1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        };
    });
};


// Store creation, creates store with multiple reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


store.dispatch(setStartDate(-1200));
store.dispatch(setEndDate(1510));
store.dispatch(sortByAmount());
// store.dispatch(searchText("coffee"));


console.log('filtered');

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: "Muffin", amount: 600, createdAt: 1200 }));
// //addExpense returns the object added into the store object used to update store.
// console.log('expenseOne', expenseOne);

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 900 }));

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());




//DISPATCHING FILTERS
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

const demoState = {
    expenses: [{
        id: "RANDOM_ID",
        description: "Janurary Rent",
        note: "This was the final payment for that address.",
        amount: 52500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined,
    }
};

