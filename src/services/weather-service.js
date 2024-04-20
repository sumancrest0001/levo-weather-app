import { GET_CURRENT_WEATHER, GET_HOURLY_WEATHER } from "./url-service";
import getWithOutAuth from './http-service';


export const getThreeHourIntervalReport = (details) => getWithOutAuth(GET_HOURLY_WEATHER(details));
export const getCurrentWeatherReport = (details) => getWithOutAuth(GET_CURRENT_WEATHER(details));