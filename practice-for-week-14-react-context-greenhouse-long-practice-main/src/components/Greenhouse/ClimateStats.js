import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function ClimateStats() {
const {humidity, temperature} = useClimate();
let [temp, setTemp] = useState(50)

 useEffect(() => {
  
    if (temp < temperature){
      
      setTimeout(()=>{setTemp(temp+1)}, 1000)
      console.log(temp)
    }else if(temp > temperature){
      setTimeout(()=>{setTemp(temp-1)}, 1000)
  }

}, [temperature, temp]);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;