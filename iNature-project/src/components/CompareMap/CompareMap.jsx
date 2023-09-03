import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import ComIslamabadMap from './islamabadCom/ComIslamabadMap';
import ComKarachiMap from './karachiCom/ComKarachiMap';
import SingleLahoreMap from '../SingleMap/SinglelLahoreMap';
import SingleAbbottabadMap from '../SingleMap/SingleAbbottabadMap';

export default function CompareMap({ city, leftYear, rightYear, setLeftYear, setRightYear }) {
  const [dividerPosition, setDividerPosition] = useState(50); // Initial divider position

  const handleDividerDrag = (e) => {
    const newDividerPosition = (e.clientX / window.innerWidth) * 100;
    setDividerPosition(newDividerPosition);
  };

  const handleLeftYearChange = (e) => {
    if (e.target.value === '0') {
      setLeftYear('')
      return
    }
    setLeftYear(e.target.value);
  }
  const handleRightYearChange = (e) => {
    if (e.target.value === '0') {
      setRightYear('')
      return
    }
    setRightYear(e.target.value);
  }

  useEffect(() => {
    setLeftYear('');
    setRightYear('');
  }, [])

  return (
    <div className='w-full h-full'>

      
      {/* <--year selectors start--->  */}
      {/* #left year selector start */}
      <div className="w-[20%] h-[10%] fixed bottom-3 left-1 bg-white rounded-md border border-black p-1 shadow-black shadow-xl z-30">
        <div className="flex w-[100%]  p-2 align-items-center gap-1">
          <select onChange={handleLeftYearChange} className='w-[50%] bg-emerald-400 border-2 rounded border-black' name="leftYearSelection" id="singleYearSelection">
            <option value="0" >Select Year</option>
            <option value="2000" >2000</option>
            <option value="2002" >2002</option>
            <option value="2006" >2006</option>
          </select>
          <h4 className='text-black font-bold text-lg'>Year: {leftYear}</h4>
        </div>
      </div>
      {/* #left year selector end */}

      {/* #right year selector start */}
      <div className="w-[20%] h-[10%] fixed bottom-3 right-1 bg-white rounded-md border border-black p-1 shadow-black shadow-xl z-30">
        <div className="flex w-[100%]  p-2 align-items-center gap-1">
          <select onChange={handleRightYearChange} className='w-[50%] bg-emerald-400 border-2 rounded border-black' name="rightYearSelection" id="rightYearSelection">
            <option value="0" >Select Year</option>
            <option value="2000" >2000</option>
            <option value="2002" >2002</option>
            <option value="2006" >2006</option>
          </select>
          <h4 className='text-black font-bold text-lg'>Year: {rightYear}</h4>
        </div>
      </div>
      {/* #right year selector end */}
      {/* <--year selectors end--->  */}

      <div className="h-full w-full split-screen-container">
      {/* Left Map */}
      <div
        className="split-screen-map"
        style={{ width: `${dividerPosition}%` }}
      >
        {city==='karachi' && <ComKarachiMap />}
        {city === 'islamabad' && <ComIslamabadMap />}

        {city ==='lahore' && <SingleLahoreMap />}
        {city==='abbottabad' && <SingleAbbottabadMap />}
      </div>

      {/* Divider */}
      <div
        className="split-screen-divider"
        onMouseDown={(e) => {
          document.addEventListener('mousemove', handleDividerDrag);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleDividerDrag);
          });
        }}
      ></div>

      {/* Right Map */}
      <div
        className="split-screen-map"
        style={{ width: `${100 - dividerPosition}%` }}
      >
         {city==='karachi' && <ComKarachiMap />}
        {city === 'islamabad' && <ComIslamabadMap />}

        {city ==='lahore' && <SingleLahoreMap />}
        {city==='abbottabad' && <SingleAbbottabadMap />}
      </div>
    </div>
    </div>
  );
}
