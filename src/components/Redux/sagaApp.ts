import {call, put, takeEvery} from 'redux-saga/effects';
import { GET_CURRENT, setCurrentWeather } from './appReducer';
import {getWeatherData} from './../api/api';


export function* appSagaWatcher() {
    yield takeEvery<any>(GET_CURRENT, appSagaWorker)
};

function* appSagaWorker(...args: any): any {
    const curentWeather = yield call(getWeatherData, args[0].city)
    yield put(setCurrentWeather(curentWeather))
};
