import { IWeatherCurrentData, CoordType, IForeCastData } from './../interfaces';

export const GET_CURRENT = "GET_CURRENT"
export const SET_CURRENT = "SET_CURRENT"
export const GET_FORECAST = "GET_FORECAST"
export const SET_FORECAST = "SET_FORECAST"
export const SET_COORDS = "SET_COORDS"
export const SET_INPUT_VALUE = "SET_INPUT_VALUE"
export const AUTH = "AUTH"

const initialState: IAppState = {
    isAuthorized: false,
    main: "",
    icon: "01d",
    description: "",
    temp: null,
    sunrise: Date.now(),
    sunset: Date.now(),
    windSpeed: null,
    clouds: null,
    inputValue: "",
    coords: {
        lat: 50,
        lon: 36.25
    },
    daily: [{
        date: Date.now(),
        icon: ""
    }]
}

export interface IAppState {
    isAuthorized: boolean
    main: string
    icon: string
    description: string
    temp: null | number
    sunrise: number
    sunset: number
    windSpeed: null | number
    clouds: null | number
    inputValue: string
    coords: CoordType
    daily: {date: number, icon: string}[]
}

export const appReducer = (state = initialState, action: ActyonsType) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                coords:  action.weather.coord
            };
        case SET_FORECAST:
            return {
                ...state,
                main: action.forecastData.current.weather[0].main,
                icon: action.forecastData.current.weather[0].icon,
                description: action.forecastData.current.weather[0].description,
                temp: action.forecastData.current.temp,
                sunrise: action.forecastData.current.sunrise,
                sunset: action.forecastData.current.sunset,
                windSpeed: action.forecastData.current.wind_speed,
                clouds: action.forecastData.current.clouds,
                daily: action.forecastData.daily.map((item) => {
                    return {date: item.dt, icon: item.weather[0].icon}
                    }
                )
            };
        case SET_COORDS:
            return {
                ...state,
                coords: { lon: action.payload.lon, lat: action.payload.lat }
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            };
        case AUTH:
            if ((action.payload.login === "test" && action.payload.password === "test123") || 
            (action.payload.login === "test1" && action.payload.password === "test1234")) {
            return {
                ...state,
                isAuthorized: true
            }} else {
                alert("wrong password or username")
               return state; 
            } 
        default: return state;
    }
}

//Action creators
export const getCurrentWeather = (city: string): GetCurrentType => ({ type: GET_CURRENT, city });
export const setCurrentWeather = (weather: IWeatherCurrentData): SetCurrentType => ({ type: SET_CURRENT, weather });
export const getForeCast = (coords: CoordType): GetForeCastType => ({ type: GET_FORECAST, coords });
export const setForeCast = (forecastData: IForeCastData): SetForecastData => ({ type: SET_FORECAST, forecastData });
export const setCoords = (lat: number, lon: number): SetCoordsType => ({ type: SET_COORDS, payload: { lat, lon } });
export const setInputValue = (value: string): SetInputValueType => ({ type: SET_INPUT_VALUE, value });
export const auth = (payload: {login: string, password: string}): AuthType => ({type: AUTH, payload});

type GetCurrentType = { type: typeof GET_CURRENT, city: string }
type SetCurrentType = { type: typeof SET_CURRENT, weather: IWeatherCurrentData }
type GetForeCastType = { type: typeof GET_FORECAST, coords: CoordType }
type SetForecastData = { type: typeof SET_FORECAST, forecastData: IForeCastData }
type SetCoordsType = { type: typeof SET_COORDS, payload: CoordType }
type SetInputValueType = { type: typeof SET_INPUT_VALUE, value: string }
type AuthType = { type: typeof AUTH, payload: {login: string, password: string}}

type ActyonsType =
    | GetCurrentType
    | SetCurrentType
    | GetForeCastType
    | SetForecastData
    | SetCoordsType
    | SetInputValueType
    |AuthType
