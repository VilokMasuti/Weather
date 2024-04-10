
/** @format */


import WeatherIcon from "./WeatherIcon";

import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

export interface ForecastWeatherDetailProps  {
  weatehrIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function ForecastWeatherDetail(
  props: ForecastWeatherDetailProps
) {
  const {
    weatehrIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
   
    description
  } = props;
  return (
    
     
        <><div className=" flex flex-row gap-[200px] p-10 items-center ml-[10px]  max-sm:ml-[30px] max-sm:gap-[60px] ">
              <WeatherIcon iconName={weatehrIcon} />
              <p className="bg-clip-text font-semibold text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900 text-sm"> DATE :{date}</p>
             
              <div className="flex flex-col px-4 bg-clip-text font-semibold text-transparent bg-gradient-to-b from-neutral-100 to-neutral-700">
                    <span className="text-5xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
                    <p className="text-xs space-x-1 whitespace-nowrap">
                          <span> Feels like</span>
                          <span>{convertKelvinToCelsius(feels_like ?? 0)}°</span>
                    </p>
                    <p className="capitalize"> {description}</p>
              </div>
        </div>
        
        </>
 
      
    
  );
}
