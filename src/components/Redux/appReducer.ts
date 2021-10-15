import { IWeatherCurrentData, CoordType, IForeCastData } from './../interfaces';

export const GET_CURRENT = "GET_CURRENT"
export const SET_CURRENT = "SET_CURRENT"
export const GET_FORECAST = "GET_FORECAST"
export const SET_FORECAST = "SET_FORECAST"
export const SET_COORDS = "SET_COORDS"
export const SET_INPUT_VALUE = "SET_INPUT_VALUE"

const initialState: IAppState = {
    isAuthorized: false,
    weatherCurrentData: {
        coord: {
            lat: null,
            lon: null
        },
          weather: [
            {
                id: null,
                main: "",
                description: "",
                icon: ""
              }
          ],
          base: "",
          main: {
            temp: null,
            pressure: null,
            humidity: null,
            temp_min: null,
            temp_max: null
          },
          visibility: null,
          wind: { 
            speed: null,
            deg: null
        },
          clouds: {
            all: null
          },
          dt: null,
          sys: {
            type: null,
            id: null,
            message: null,
            country: "",
            sunrise: null,
            sunset: null
          },
          id: null,
          name: "",
          cod: null
    },
    weatherForecastData: null,
    inputValue: "Kharkiv",
    coords: {
        lat: 50,
        lon: 36.25
    },
}

export interface IAppState {
    isAuthorized: boolean
    weatherCurrentData: null | IWeatherCurrentData
    weatherForecastData: null | IForeCastData
    inputValue: string
    coords: CoordType
}

export const appReducer = (state = initialState, action: ActyonsType) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                weatherCurrentData: action.weather,
                coords:  action.weather.coord
            };
        case SET_FORECAST:
            return {
                ...state,
                weatherForecastData: action.forecastData
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

type GetCurrentType = { type: typeof GET_CURRENT, city: string }
type SetCurrentType = { type: typeof SET_CURRENT, weather: IWeatherCurrentData }
type GetForeCastType = { type: typeof GET_FORECAST, coords: CoordType }
type SetForecastData = { type: typeof SET_FORECAST, forecastData: IForeCastData }
type SetCoordsType = { type: typeof SET_COORDS, payload: CoordType }
type SetInputValueType = { type: typeof SET_INPUT_VALUE, value: string }

type ActyonsType =
    | GetCurrentType
    | SetCurrentType
    | GetForeCastType
    | SetForecastData
    | SetCoordsType
    | SetInputValueType
