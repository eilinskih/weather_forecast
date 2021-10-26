import { GET_FORECAST, setForeCast } from './appReducer';
import * as api from './../api/api'
import { appSagaWatcherForecast, appSagaWorkerForecast } from "./sagaAppForeCast"
import { runSaga } from 'redux-saga';

describe("sagaApp", () => {
    const saga = appSagaWatcherForecast()
    const worker = appSagaWorkerForecast({type: GET_FORECAST, coords: {lat: 1, lon: 1}})
        test("watcher takes actions", () => {
            //@ts-ignore
            expect(saga.next().value.payload.args[0]).toBe("GET_FORECAST")
        })
    
        test("watcher done", () => {
            expect(saga.next().done).toBeTruthy()
        })
    
        test("worker calls dispatch", () => {
            //@ts-ignore
            expect(worker.next().value.type).toBe("CALL")
            //@ts-ignore
            expect(worker.next().value.type).toBe("PUT")
        })
    
        test("worker done", () => {
            expect(worker.next().done).toBeTruthy()
        })
    
        test('worker dispatches data', async () => {
            const forecastData: any = { forecast: 'test response data' };
            const getWeatherForeCastData = jest.spyOn(api, 'getWeatherForeCastData')
              .mockImplementation(() => Promise.resolve(forecastData));
            const dispatched: any = [];
            const result = await runSaga({
              dispatch: (action) => dispatched.push(action),
              //@ts-ignore
            }, appSagaWorkerForecast, {type: GET_FORECAST, coords: {lat: 1, lon: 1}});
        
            expect(getWeatherForeCastData).toHaveBeenCalledTimes(1);
            expect(dispatched).toEqual([setForeCast(forecastData)]);
            getWeatherForeCastData.mockClear();
          });
     })