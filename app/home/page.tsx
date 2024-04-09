"use client";
import React from "react";
import Navbar from "../shared/Navbar";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { fromUnixTime, format, parseISO } from "date-fns";
import axios from "axios";
import { Container } from "../shared/Container";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

import WeatherIcon from "../shared/WeatherIcon";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcon";
import { BackgroundBeams } from "../../components/ui/background-beams";
interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
const HomePage = () => {
  // Assuming QueryKey is defined elsewhere in your code

  // Assuming QueryKey is defined elsewhere in your code

  const { isLoading, error, data } = useQuery<WeatherData>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=hubli&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      );
      return data;
    },
  });

  if (isLoading) return "Loading";
  const firstData = data?.list[0]; // Assuming you want to access the first item in the list

  return (
    <main className="  max-h-screen">
      <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative  antialiased">
        <Navbar />
        {/* <BackgroundBeams /> */}
        <main className=" px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 p-4">
          {/* Todays Data */}
          <section>
            <div>
              <h2 className=" flex gap-2 text-3xl items-end  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 ">
                <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}</p>
                <p className="text-lg">
                  ({format(parseISO(firstData?.dt_txt ?? ""), "dd.MM.yyyy")})
                </p>
              </h2>
              <Container className=" gap-10 px-6 items-center mt-3">
                <div className=" flex flex-col px-4 ">
                  {/* temprature */}
                  <span className=" text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950  ">
                    {convertKelvinToCelsius(firstData?.main.temp ?? 296.37)}°
                  </span>
                  <p className="text-xs space-x-1 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-600 ">
                    <span> Feels like</span>
                    <span>
                      {convertKelvinToCelsius(firstData?.main.feels_like ?? 0)}°
                    </span>
                  </p>
                  <p className="text-xs space-x-2  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-600">
                    <span>
                      {convertKelvinToCelsius(firstData?.main.temp_min ?? 0)}
                      °↓{" "}
                    </span>
                    <span>
                      {" "}
                      {convertKelvinToCelsius(firstData?.main.temp_max ?? 0)}
                      °↑
                    </span>
                  </p>
                </div>

                {/* Time & weather with icon */}

                <div className=" flex gap-10 max-sm:gap-16 overflow-x-auto w-full justify-between">
              
                  {data?.list.map((d, i) => (
                    <div
                      key={i}
                      className=" flex flex-col justify-between gap-2 items-center font-semibold  text-xs font bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800"
                    >
                      <p className="whitespace-nowrap pt-3">
                        {format(parseISO(d.dt_txt), "h:mm a")}
                      </p>
                      <WeatherIcon
                        iconName={getDayOrNightIcon(
                          d.weather[0].icon,
                          d.dt_txt
                        )}
                      />
                    </div>
                  ))}
                </div>
              </Container>
            </div>
            <div className=" flex gap-6">
              <div className=" ml-[60px] mt-3 max-sm:flex max-sm:flex-col  max-sm:ml-[50px]">
                <p className=" capitalize  text-center text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900">
                  {firstData?.weather[0].description}
                </p>
<div 
                className=" ml-[480px] max-sm:ml-[90px]">
<WeatherIcon
                  iconName={getDayOrNightIcon(
                    firstData?.weather[0].icon ?? "",
                    firstData?.dt_txt ?? ""
                  )}
                />
</div>
                
            <div>
  {data?.city && (
    <div className="capitalize flex flex-row gap-3  max-sm:flex max-sm:flex-col text-center text-xl bg-clip-text font-semibold text-transparent bg-gradient-to-b from-neutral-100 to-neutral-700">
           
      <p>City:{data.city.name}</p>|
      <p>Population: {data.city.population}</p>|
      <p>Wind: {firstData?.wind.speed}</p>|
      <p>Sunrise Time: {format(fromUnixTime(data.city.sunset), "hh:mm:ss a")}</p>|
      <p>Sunset Time: {format(fromUnixTime(data.city.sunset), "hh:mm:ss a")}</p>|
    </div>
  )}
</div>

              </div>
            </div>
          </section>
        </main>
      </div>
      <BackgroundBeams />
    </main>
  );
};

export default HomePage;
