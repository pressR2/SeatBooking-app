import navigation from './navigation';
import getSeatsData from './getSeatsData';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers ({
    navigation: navigation,
    data: getSeatsData,
    form: formReducer
});

export default allReducers;