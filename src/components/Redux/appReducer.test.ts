import { appReducer, IAppState, setInputValue, setCoords, auth } from './appReducer';

let initialState: IAppState
    beforeEach(() => {
        initialState = {
            isAuthorized: false,
            main: "test-main",
            icon: "01d",
            description: "test-desc",
            temp: null,
            sunrise: Date.now(),
            sunset: Date.now(),
            windSpeed: null,
            clouds: null,
            inputValue: "test-value",
            coords: {
                lat: 50,
                lon: 36.25
            },
            daily: [{
                date: Date.now(),
                icon: "test-icon"
            }]
        } 
    }) 

test('setInputValue', () => {
    const newState = appReducer(initialState, setInputValue('value'))
    expect(newState.inputValue).toBe('value')
});

test('setcoords', () => {
    const newState = appReducer(initialState, setCoords(1, 1))
    expect(newState.coords).toStrictEqual({lat: 1, lon: 1})
});

test('auth', () => {
    const newState = appReducer(initialState, auth({ login: 'test', password: 'test123' }))
    expect(newState.isAuthorized).toBeTruthy
});
