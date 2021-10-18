import { IForeCastData, CoordType } from './../interfaces';
import {call, put, takeEvery} from 'redux-saga/effects';

import { getWeatherForeCastData } from '../api/api';
import { GET_FORECAST, setForeCast } from './appReducer';

export function* appSagaWatcherForecast() {
    yield takeEvery(GET_FORECAST, appSagaWorkerForecast)
};

function* appSagaWorkerForecast(args: {type: typeof GET_FORECAST, coords: CoordType}) {
    const foreCast: IForeCastData = yield call<any>(getWeatherForeCastData, args.coords)
    yield put(setForeCast(foreCast))
};
