import { combineReducers } from 'redux';
import dataReducer from './r/dataReducer';

const rootReducer = combineReducers({
	data: dataReducer
});

export default rootReducer;