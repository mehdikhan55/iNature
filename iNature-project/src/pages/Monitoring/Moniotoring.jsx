import React from 'react'
import Button from '../../components/Button/Button';

export default function Moniotoring() {
  const [city, setCity] = React.useState('')

  const handleCityChange = (e) => {
    if (e.target.value === '0') {
      setCity('')
      return
    }
    setCity(e.target.value);
  };

  return (
    <div className='w-full h-[100vh] position-absolute bg-red-600 flex-col mt-20'>

      {/* controls area start  */}
      <div className="flex h-[8%] justify-between bg-blue-500">
        <div className="flex w-[40%]  p-2 align-items-center gap-1">
          <select onChange={handleCityChange} className='w-[60%] bg-emerald-400 border-2 rounded border-black' name="citySelection" id="citySelection">
            <option value="0" >Select City</option>
            <option value="Islamabad" >Islamabad</option>
            <option value="Karachi" >Karachi</option>
            <option value="Lahore" >Lahore</option>
          </select>
          <h3 className='text-black'>City: {city}</h3>
        </div>

        <div className='bg-yellow-300'>
          details
        </div>

        <div className="flex gap-4 pl-12 w-[30%] bg-red-500">
          buttons 
         
        </div>
      </div>
      {/* controls area end  */}

      {/* map area start  */}
      <div className="flex h-[92%] bg-slate-200">
        map area
      </div>
      {/* map area end  */}

    </div>
  )
}
