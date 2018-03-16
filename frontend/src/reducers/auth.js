import actionTypes from '../actions/ActionTypes';

export default (action, state) => {
    switch (action.type) {
        case actionTypes.REFRESH_TOKEN:
            return { ...state, token: action.payload };
            break;
        default:
            return state;
            break;
    }
}