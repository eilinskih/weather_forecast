import { GET_CURRENT, setCurrentWeather } from './appReducer'
import {appSagaWatcher, appSagaWorker} from './sagaApp'
import * as api from './../api/api'
import { runSaga } from 'redux-saga'
 
 describe("sagaApp", () => {
const saga = appSagaWatcher()
const worker = appSagaWorker({type: GET_CURRENT, city: "test city"})
    test("watcher takes actions", () => {
        //@ts-ignore
        expect(saga.next().value.payload.args[0]).toBe("GET_CURRENT")
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

    test("worker dispatches data", () => {
        expect(worker.next().done).toBeTruthy()
    })

    test('should call api and dispatch success action', async () => {
        const weatherData: any = { weather: 'test response data' };
        const getWeatherDataSpy = jest.spyOn(api, 'getWeatherData')
          .mockImplementation(() => Promise.resolve(weatherData));
        const dispatched: any = [];
        const result = await runSaga({
          dispatch: (setCurrentWeather) => dispatched.push(setCurrentWeather),
          //@ts-ignore
        }, appSagaWorker, {type: GET_CURRENT, city: "string"});
    
        // expect(getWeatherDataSpy).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([setCurrentWeather(weatherData)]);
        getWeatherDataSpy.mockClear();
      });
 })

