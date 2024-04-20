import React from 'react';
import { UNITS } from '@/utils/constants';
import Image from 'next/image';
import { getWeatherIconUrl } from '@/utils';

function HeroSection({ currentWeather, isLoading }) {
    const unit = process.env.NEXT_PUBLIC_OPEN_WEATHER_UNIT;
    const measurementUnits = UNITS[unit];
    return (
        <section className='hero-section  flex w-full h-[70vh] lg:h-[60vh] xl:h-[50vh] bg-cover bg-center bg-no-repeat'>
            {isLoading && <p>Loading...</p>}
            {currentWeather && (<div className='  w-full hero-main lg:max-w-[950px] xl:max-w-[1100px] p-8 text-lg sm:text-xl lg:text-2xl m-auto md:flex-row flex flex-col items-center justify-between' >
                <div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl mb-8'><span className='decoration-2 underline leading-relaxed'>{currentWeather?.city}, {currentWeather?.country}</span></h2>
                    <h3 className='mb-3 md:mb-6'>{`${currentWeather.currentTime}`}</h3>
                    <h3>{`${currentWeather.temp} ${measurementUnits.temperature}`}</h3>
                </div>
                <div className='mt-12 md:mt-[-50px]'>
                    <div>
                        <Image
                            src={getWeatherIconUrl(currentWeather?.weatherIcon)}
                            width={100}
                            height={100}
                            alt="current weather condition"
                        />
                    </div>
                    <div>
                        <h3 className='mb-3 md:mb-6 text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>{currentWeather.weatherDescription}</h3>
                        <h3 className='mb-3 md:mb-6'>{`${currentWeather.minTemp} ${measurementUnits.temperature} - ${currentWeather.maxTemp} ${measurementUnits.temperature}`}</h3>
                        <h3 className='mb-3 md:mb-6'>Wind Speed: {currentWeather.windSpeed} {measurementUnits.windSpeed}</h3>
                        <h3>Humidity: {currentWeather.humidity} {measurementUnits.humidity}</h3>
                    </div>
                </div>
            </div>)}
        </section>
    );
}

export default HeroSection;