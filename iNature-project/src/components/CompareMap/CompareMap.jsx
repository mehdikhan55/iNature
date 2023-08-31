import React, { useEffect } from 'react'
import styles from './CompareMap.module.css'



export default function CompareMap({ leftYear, rightYear, setLeftYear, setRightYear }) {
  const position = [51.505, -0.09]

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
    <div>

      {/* <--year selectors start--->  */}
      {/* #left year selector start */}
      <div className="w-[20%] h-[10%] fixed bottom-3 left-1 bg-white rounded-md border border-black p-1 shadow-black shadow-xl">
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
      <div className="w-[20%] h-[10%] fixed bottom-3 right-1 bg-white rounded-md border border-black p-1 shadow-black shadow-xl">
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
      
    </div>
  )
}
