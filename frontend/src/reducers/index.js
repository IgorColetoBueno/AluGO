import { combineReducers } from 'redux';
import Pessoas from './pessoas';
import Imoveis from './imoveis';

export default combineReducers({
	pessoas: Pessoas,
	imoveis: Imoveis
})