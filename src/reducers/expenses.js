
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

export default expensesReducer;