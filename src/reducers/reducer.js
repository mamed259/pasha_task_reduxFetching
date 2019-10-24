
const intialState = {
    loading: false,
    data: null,
    error: ""
};

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true,
            };
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: action.msg
            };
        default:
            return state
    }

};


export default reducer
