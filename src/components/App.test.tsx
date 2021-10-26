import { render } from "@testing-library/react"
import * as redux from "react-redux"

import App from './App'

 describe("App", () => {
    const useSelectorMock = jest.spyOn(redux, 'useSelector')
    const useDispatchMock = jest.spyOn(redux, 'useDispatch')


    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })

    test("App renders", () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
              .mockImplementationOnce((success) => Promise.resolve(success({
                coords: {
                  latitude: 51.1,
                  longitude: 45.3
                }
              })))
          };
          //@ts-ignore
          global.navigator.geolocation = mockGeolocation;

          const AppDispatch = jest.fn()
        useDispatchMock.mockReturnValue(AppDispatch)
        useSelectorMock.mockReturnValue({isAuthorized: false, coords: {lat: 1, lon: 1}})
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), 
              removeListener: jest.fn(), 
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        render(<App/>)
        expect(useDispatchMock).toBeCalledTimes(2)
     })
 })
