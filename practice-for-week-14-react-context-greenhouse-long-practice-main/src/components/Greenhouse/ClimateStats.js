import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function ClimateStats() {
const {humidity, temperature} = useClimate();
const [temp, setTemp] = useState(50)
const [humid,setHumid] = useState(40)

 useEffect(() => {
  
    if (temp < temperature){
      
      setTimeout(()=>{setTemp(temp+1)}, 1000)
    
    }else if(temp > temperature){
      setTimeout(()=>{setTemp(temp-1)}, 1000)
  }

}, [temperature, temp]);

useEffect(() => {
  
  if (humid < humidity){
    
    setTimeout(()=>{setHumid(humid+1)}, 1000)
  
  }else if(humid > humidity){
    setTimeout(()=>{setHumid(humid-1)}, 1000)
}

}, [humidity, humid]);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humid}%
      </div>
    </div>
  )
}

export default ClimateStats;