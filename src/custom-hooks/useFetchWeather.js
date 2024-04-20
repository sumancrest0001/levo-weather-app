import { getThreeHourIntervalReport, getCurrentWeatherReport } from "@/services/weather-service";
import { useState, useEffect } from 'react';
import { getUserLocationCoordinates, getFormatWeatherData } from '../utils/index';

function useFetchWeather() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [threeHourIntervalWeather, setThreeHourIntervalWeather] = useState([]);
    const [isLoading1, setIsLoading1] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    const fetchCurrentWeather = async ({ lat, long }) => {
        setIsLoading1(true);
        const res = await getCurrentWeatherReport({ lat, long });
        if (res.status) {
            const formattedData = getFormatWeatherData(res.data);
            setCurrentWeather(formattedData);
            setIsLoading1(false);
        }
    }

    const fetchThreeHourIntervalWeather = async ({ lat, long }) => {
        setIsLoading2(true);
        const res = await getThreeHourIntervalReport({ lat, long });
        if (res.status) {
            const formattedList = res.data.list.map(item => getFormatWeatherData(item));
            setThreeHourIntervalWeather(formattedList);
            setIsLoading2(false);
        } else {
            console.log(res.error)
        }
    }

    const handleGetUserLocation = async () => {
        const result = await getUserLocationCoordinates();
        if (!result.error) {
            fetchCurrentWeather({ ...result.coordinates });
            fetchThreeHourIntervalWeather({ ...result.coordinates });
        } else {
            console.log(result.error);
        }
    }

    useEffect(() => {
        handleGetUserLocation();
    }, []);

    return ({ isLoading1, isLoading2, currentWeather, threeHourIntervalWeather });
}

export default useFetchWeather;