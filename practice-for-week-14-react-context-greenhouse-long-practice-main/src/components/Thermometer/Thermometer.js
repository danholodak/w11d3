import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from "react";

function Thermometer() {
  const {temperature,setTemperature,temp,setTemp,humidity,humid,setHumid} = useClimate()

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
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;