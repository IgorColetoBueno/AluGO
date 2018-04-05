import { NEXT, PREVIUS } from '../actions/ActionTypes';

const INITIAL_STATE = {
    page: 1
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT:
            return { ...state, page: state.page + 1 }
            break;
        case PREVIUS:
            return { ...state, page: state.page - 1 }
            break;
        default:
            return state;
            break;
    }
}