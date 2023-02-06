import {
    configureStore, combineReducers,
    applyMiddleware,
  } from '@reduxjs/toolkit';
  import thunk from 'redux-thunk';
import detailsreducer from './cryptoDetails/cryptoDetails';
import coinsreducer from './cryptoHome/cryptoHome';


const rootReducer = combineReducers({
    coins: coinsreducer,
    details: detailsreducer,
})

const store = configureStore(
    {reducer:rootReducer},
    applyMiddleware(thunk),
);

export default store;