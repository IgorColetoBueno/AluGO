import { combineReducers } from 'redux';
import Pessoas from './pessoas';
import Imoveis from './imoveis';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
	pessoas: Pessoas,
	imoveis: Imoveis,
	form: formReducer,
	toastr: toastrReducer
})