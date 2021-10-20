
import { GET_CURRENT } from './appReducer'
import {appSagaWatcher, appSagaWorker} from './sagaApp'
 
 describe("sagaApp", () => {

    test("watcher takes actions", () => {
        const saga = appSagaWatcher()
        //@ts-ignore
        expect(saga.next().value.payload.args[0]).toBe("GET_CURRENT")
    })

    test("worker calls dispatch", () => {
        const worker = appSagaWorker({type: GET_CURRENT, city: "test city"})
        //@ts-ignore
        expect(worker.next().value.type).toBe("CALL")
        //@ts-ignore
        expect(worker.next().value.type).toBe("PUT")
    })
 })

