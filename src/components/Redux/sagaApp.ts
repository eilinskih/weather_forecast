import { IWeatherCurrentData } from './../interfaces';
import { call, put, takeEvery} from 'redux-saga/effects';

import { GET_CURRENT, setCurrentWeather } from './appReducer';
import {getWeatherData} from './../api/api';


export function* appSagaWatcher() {
    yield takeEvery(GET_CURRENT, appSagaWorker)
};

export function* appSagaWorker(args: {type: typeof GET_CURRENT, city: string}) {
    const curentWeather: IWeatherCurrentData = yield call(getWeatherData, args.city)
    yield put(setCurrentWeather(curentWeather))
};

console.log(appSagaWorker({type: GET_CURRENT, city: "string"}).next().value)
console.log(appSagaWorker({type: GET_CURRENT, city: "string"}).next().value)
