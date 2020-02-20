import { combineReducers } from 'redux';
import businessListReducer from './businessList';
import authReducer from './auth';



const rootReducer = combineReducers({
	businessList: businessListReducer,
	auth: authReducer
});

export default rootReducer;