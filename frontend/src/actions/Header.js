import * as ActionTypes from './ActionTypes'

const onToggle = (value) => {
	return {
		type: ActionTypes.ON_TOGGLE,
		payload: {
			value
		}
	}
}

export default {
	onToggle
}