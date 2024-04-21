import React from 'react';
import { getWeatherIconUrl } from '@/utils';
import { UNITS } from '@/utils/constants';
import Image from 'next/image';


function WeatherCard({ weather }) {
    const unit = process.env.NEXT_PUBLIC_OPEN_WEATHER_UNIT;
    const measurementUnits = UNITS[unit];
    return (
        <div className="max-w-sm bg-[#94d3f7] border h-full sm:h-[220px]  text-white border-gray-200 rounded-lg shadow weather-card bg-cover bg-center bg-no-repeat">
            <h5 className="mb-2 p-5 pb-0 text-2xl font-bold tracking-tight">{weather.currentTime}</h5>
            <div className="p-5 justify-between sm:flex">
                <div>
                    <p className="mb-3 font-normal">{weather.weatherDescription}</p>
                    <p className="mb-3 font-normal">Humidity: {weather.temp}</p>
                </div>
                <div className='mt-4 sm:mt-[-15px]'>
                    <Image
                        src={getWeatherIconUrl(weather?.weatherIcon)}
                        width={50}
                        height={50}
                        alt="current weather condition"
                        className='sm:ml-auto'
                    />
                    <p className='mb-3 font-normal'>{`${weather.minTemp} ${measurementUnits.temperature} - ${weather.maxTemp} ${measurementUnits.temperature}`}</p>
                </div>
            </div>
        </div>

    );
}

export default WeatherCard;