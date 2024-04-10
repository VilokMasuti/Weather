" use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Searchbox from './Searchbox';
import axios from 'axios';
import { useAtom } from "jotai";
import { placeAtom } from '../atom';
type Props = { location?: string;

 };
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;


const Navbar = ({location}:Props) => {
  const [city, setCity] = useState("")
  const [error, setError] = useState("");
  //
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [place, setPlace] = useAtom(placeAtom);
async function handleInputChnage(value:string){
  setCity(value)
  if(value.length >=3 ){
    try {
      const response = await  axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
      )

const suggestions = response.data.list.map((item:any) => item.name)
setSuggestions(suggestions)
setError("")
setShowSuggestions(true)

    } catch (error) {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }else{
    setSuggestions([]);
    setShowSuggestions(false);
  }
}
function handleSuggestionClick(value: string) {
  setCity(value);
  setShowSuggestions(false);
}

function handleSubmiSearch(e: React.FormEvent<HTMLFormElement>){
e.preventDefault()
if(suggestions.length === 0){
  setError("What You Are Searching ")
  
}
else{
  setError('')
  setPlace(city);
}}
function handleCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        const cityName = response.data.name; // Extract city name from response
        setCity(cityName); // Update city state with current location
      } catch (error) {
        console.log("Error fetching weather data for current location");
      }
    });
  }
}



  return (
    <><nav className="sticky top-0 left-0 z-50 bg-transparent shadow-md">
      <div className="h-20 w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <h1 className="flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 text-center font-sans font-bold lg:text-5xl sm:text-xl">
          WEATHER
          <div className='mt-2 ml-[-10px]'>
            <Image
              src='/assests/w.png'
              alt=''
              width={50}
              height={50} />
          </div>
        </h1>
        <section className="items-center flex gap-5 max-sm:gap-7">
          <Image
            src='/assests/s.png'
            
            onClick={handleCurrentLocation}
           
            alt=''
            width={50}
            height={50}
            className="cursor-pointer max-sm:h-[44px] max-sm:w-[45px]" />
          <Image
            src='/assests/l.png'
            alt=''
            width={50}
            height={50}
            className="cursor-pointer max-sm:h-[44px] max-sm:w-[45px]" />
          <p className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 text-center font-sans font-bold text-xl'>{location}</p>
          <div className="relative hidden md:flex">
            <Searchbox
              value={city}
              onSubmit={handleSubmiSearch}
              onChange={(e) => handleInputChnage(e.target.value)} />
          </div>
        </section>
      </div>
    </nav><section className="flex   max-w-7xl px-3 ">
        <div className="relative ">
          {/* SearchBox */}

        
          <SuggetionBox
             showSuggestions={showSuggestions} // Ensure to pass showSuggestions prop
             suggestions={suggestions}
             handleSuggestionClick={handleSuggestionClick}
             error={error}
             />
        </div>
      </section></>
  );
}
function SuggetionBox({
  showSuggestions,
  suggestions,
  handleSuggestionClick,
  error
}: {
  showSuggestions: boolean;
  suggestions: string[];
  handleSuggestionClick: (item: string) => void;
  error: string;
}) {
  return (
    <>
      {((showSuggestions && suggestions.length > 1) || error) &&  (
        <ul className="mb-4 bg-transparent text-white absolute border top-[-24px] left-[1110px]  border-gray-900 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
          {error && suggestions.length < 1 && (
            <li className="text-red-500 p-1 "> {error}</li>
          )}
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSuggestionClick(item)}
              className="cursor-pointer p-1 rounded   hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {showSuggestions || false}
    </>
  );
}

export default Navbar;
