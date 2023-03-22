import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from "react";

function Hygrometer() {
  const {humidity,setHumidity,humid,setHumid,temp,setTemp,temperature,} = useClimate()

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
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;