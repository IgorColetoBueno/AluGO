import * as ActionTypes from './../actions/ActionTypes'

export default (state = false, action) => {
	switch(action.type) {
		case ActionTypes.ON_TOGGLE:
			return !state
		break;
		default:
			return state
	}
}