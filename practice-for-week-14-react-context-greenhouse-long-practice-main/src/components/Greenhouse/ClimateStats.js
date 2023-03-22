import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect } from 'react';

function ClimateStats() {
const {humidity, temperature,temp,setTemp,humid,setHumid} = useClimate();
// const [temp, setTemp] = useState(50)
// const [humid,setHumid] = useState(40)

 useEffect(() => {
  
    if (temp < temperature){
      
      let increaseTemp = setTimeout(()=>{setTemp(temp+1)}, 1000)
      return ()=>{clearTimeout(increaseTemp)}
    
    }else if(temp > temperature){
     let decreaseTemp = setTimeout(()=>{setTemp(temp-1)}, 1000)
      return ()=>{clearTimeout(decreaseTemp)}
  }

}, [temperature, temp,setTemp]);

useEffect(() => {
  
  if (humid < humidity){
    
    let increaseHumid = setTimeout(()=>{setHumid(humid+1)}, 1000)
    return ()=>{clearTimeout(increaseHumid)}
  
  }else if(humid > humidity){
    let decreaseHumid = setTimeout(()=>{setHumid(humid-1)}, 1000)
    return ()=>{clearTimeout(decreaseHumid)}
  }
  


}, [humidity, humid,setHumid]);

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