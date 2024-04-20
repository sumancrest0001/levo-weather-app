import moment from 'moment';

const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve({ lat: latitude, long: longitude });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geo location is not supported/enabled on this device'));
        }
    });
}

function convertSecondsIntoDate(milliseconds) {
    const date = moment.unix(milliseconds).format('MMM DD YYYY HH:mm');
    return date;
}

export const getUserLocationCoordinates = async () => {
    try {
        const res = await getUserLocation();
        return ({ coordinates: res });
    } catch (error) {
        return ({ error: error })
    }
}

export const getWeatherIconUrl = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

export const getFormatWeatherData = (rawData) => {
    const formattedData = {
        weatherDescription: rawData.weather[0].description,
        weatherIcon: rawData.weather[0].icon,
        currentTime: rawData.dt ? convertSecondsIntoDate(rawData.dt) : moment(rawData.dt_text).format('MMM-DD-YYYY'),
        temp: rawData.main.temp,
        minTemp: rawData.main.temp_min,
        maxTemp: rawData.main.temp_max,
        humidity: rawData.main.humidity,
        windSpeed: rawData.wind.speed,
        country: rawData?.sys?.country,
        city: rawData?.name
    };
    return (formattedData);
}
