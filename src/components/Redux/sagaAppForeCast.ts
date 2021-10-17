import {call, put, takeEvery} from 'redux-saga/effects';
import { getWeatherForeCastData } from '../api/api';
import { GET_FORECAST, setForeCast } from './appReducer';

export function* appSagaWatcherForecast() {
    yield takeEvery<any>(GET_FORECAST, appSagaWorkerForecast)
};

function* appSagaWorkerForecast(...args: any): any {
    const foreCast = yield call<any>(getWeatherForeCastData, args[0].coords)
    yield put(setForeCast(foreCast))
};
