import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import { appReducer } from './appReducer';
import {appSagaWatcher} from './sagaApp';
import {appSagaWatcherForecast} from './sagaAppForeCast';


const saga = createSagaMiddleware();
const rootReducer = combineReducers({
    appState: appReducer
});
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(appSagaWatcher);
saga.run(appSagaWatcherForecast);

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;