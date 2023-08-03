import { createStore } from 'redux';
import testimonialReducer from './reducers/testimonialReducer';

const store = createStore(testimonialReducer);

export default store;
