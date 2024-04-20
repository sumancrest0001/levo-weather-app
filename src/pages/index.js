import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import HeroSection from "@/components/hero-section";
import WeatherCard from "@/components/weather-card";
import useFetchWeather from "@/custom-hooks/useFetchWeather";

export default function Home() {
    const { isLoading1, isLoading2, currentWeather, threeHourIntervalWeather } = useFetchWeather();

    return (
        <main
            className={` ${inter.className}`}
        >
            <HeroSection currentWeather={currentWeather} isLoading={isLoading1} />
            <div className="weather-list items-center  gap-4 xl:gap-8 justify-around flex-wrap p-2 sm:p-4 flex flex-col md:flex-row">
                {isLoading2 && <p>Loading...</p>}
                {threeHourIntervalWeather && threeHourIntervalWeather.map((item, index) => <WeatherCard key={index} weather={item} />)}
            </div>
        </main>
    );
}
