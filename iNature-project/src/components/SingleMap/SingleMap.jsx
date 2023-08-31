import React, { useEffect, useState } from 'react'
import styles from './SingleMap.module.css'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SingleCityMap from './SingleCityMap';


export default function SingleMap({ city, singleYear, setSingleYear }) {
  const [theCenter,setTheCenter]=useState("");
 
  const calculateCenter = () => {
    if (city === 'karachi') {
        return [24.8607, 67.0011];
    } else if (city === 'islamabad') {
        return [33.6844, 73.0479];
    } else {
        return [24.8607, 67.0011]; // Default center
    }
};

  const handleYearChange = (e) => {
    if (e.target.value === '0') {
      setSingleYear('')
      return
    }
    setSingleYear(e.target.value);
  }

  useEffect(() => {
    setSingleYear('');
  }, [])

  useEffect(()=>{
    setTheCenter(calculateCenter());
  },[city])



  return (
    <div id='mapId' className='w-full h-full bg-red-700'>
      {/* <--year selectors start--->  */}
      <div className="w-[20%] h-[10%] fixed bottom-3 left-1 bg-white rounded-md border-2 border-black p-1 shadow-black shadow-xl z-10">

        <div className="flex w-[100%]  p-2 align-items-center gap-1">
          <select onChange={handleYearChange} className='w-[50%] bg-emerald-400 border-2 rounded border-black' name="singleYearSelection" id="singleYearSelection">
            <option value="0" >Select Year</option>
            <option value="2000" >2000</option>
            <option value="2002" >2002</option>
            <option value="2006" >2006</option>
          </select>
          <h4 className='text-black font-bold text-lg'>Year: {singleYear}</h4>
        </div>

      </div>

      {/* <-- year selector end -->*/}

      {/* <-- map start --> */}

      {theCenter && <SingleCityMap theCenter={theCenter} setTheCenter={setTheCenter}/>}
      {/* <-- map end --> */}

    </div>
  )
}
