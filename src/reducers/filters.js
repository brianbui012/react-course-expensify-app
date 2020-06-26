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

export default filtersReducer;