import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Props = {
  iconName: string;
}

const WeatherIcon: React.FC<Props> = (props) => {
  const { iconName } = props;

  return (
    <div
      title={iconName}
      className={cn("relative h-20 w-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-800")}
    >
      <Image 
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
        alt="icon"
        width={100}
        height={100}
      />
    </div>
  );
}

export default WeatherIcon;
