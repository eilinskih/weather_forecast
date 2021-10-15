
export interface IWeatherCurrentData {
    coord: CoordType,
      weather: WeatherType[],
      base: string,
      main: MainType,
      visibility: number | null,
      wind: WindType,
      clouds: {
        all: number | null
      },
      dt: number | null,
      sys: SysType,
      id: number | null,
      name: string,
      cod: number | null
}

export interface IForeCastData {
        lat: number
        lon: number
        timezone: string
        timezone_offset: number
        current: CurrentType
        daily: DailyType[]
}

export type DailyType = {
dt: number
sunrise: number
sunset: number
moonrise: number
moonset: number
moon_phase: number
temp: TempType
feels_like: FeelsType
pressure: number
humidity: number
dew_point: number
wind_speed: number
wind_deg: number
wind_gust: number
weather: WeatherType[],
clouds: number
pop: number
rain?: number
uvi: number
}

export type FeelsType = {
    day: number
    night: number
    eve: number
    morn: number
    }

export type TempType = {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
    }


export type CurrentType = {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: WeatherType[]
}

export type CoordType = {
    lon: number | null,
    lat: number | null
  }

  export type WeatherType = {
    id: number | null,
    main: string,
    description: string,
    icon: string
  }

  export type MainType = {
    temp: number | null,
    pressure: number | null,
    humidity: number | null,
    temp_min: number | null,
    temp_max: number | null
  }

  export type WindType = {
    speed: number | null,
    deg: number | null
  }

  export type SysType = {
    type: number | null,
    id: number | null,
    message: number | null,
    country: string,
    sunrise: number | null,
    sunset: number | null
  }