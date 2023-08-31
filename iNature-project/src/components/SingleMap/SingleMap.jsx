import React, { useEffect, useState } from 'react'
import styles from './SingleMap.module.css'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SingleKarachiMap from './SingleKarachiMap';
import SingleIslamabadMap from './SingleIslamabadMap';
import SingleAbbottabadMap from './SingleAbbottabadMap';
import SingleLahoreMap from './SinglelLahoreMap';


export default function SingleMap({ city, singleYear, setSingleYear }) {
  
 

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





  return (
    <div id='mapId' className='w-full h-full bg-red-700'>
      {/* <--year selectors start--->  */}
      <div className="w-[20%] h-[10%] fixed bottom-3 left-1 bg-white rounded-md border-2 border-black p-1 shadow-black shadow-xl z-30">

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

      {city==="karachi" && <SingleKarachiMap />}
      {city==="islamabad" && <SingleIslamabadMap />}
      {city==="abbottabad" && <SingleAbbottabadMap />}
      {city==="lahore" && <SingleLahoreMap />}
      {/* <-- map end --> */}

    </div>
  )
}
