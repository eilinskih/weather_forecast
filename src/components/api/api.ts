import { CoordType } from './../interfaces';
import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const getWeatherForeCastData = async (coords: {lat: number, lon: number}) => {
    const apiKey = 'cbb8ccd545f5cb84563d8a238630f967'
    try {
    const response = await instanse.get(`onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=daily&appid=${apiKey}`);
    return response.data;}
    catch (e: any) {
        alert(e.message)
    }
}

export const getWeatherData = async (city: string = "Kharkiv") => {
    const apiKey = 'cbb8ccd545f5cb84563d8a238630f967'
    try {
    const response = await instanse.get(`weather?q=${city}&appid=${apiKey}`);
    return response.data;}
    catch (e: any) {
        alert(e.message)
    }
}
