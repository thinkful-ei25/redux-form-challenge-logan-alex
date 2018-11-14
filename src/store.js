import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

const mainReducer =(s = null) => s;

export default createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);