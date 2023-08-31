import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import styles from './Monitoring.module.css'
import Map from '../../components/Map/Map';
import PreviewModal from '../../components/PreviewModal/PreviewModal';

export default function Moniotoring() {
  const [city, setCity] = useState('karachi')
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [previewMode, setPreviewMode] = useState('single')

  const [leftYear, setLeftYear] = React.useState('');
  const [rightYear, setRightYear] = React.useState('');
  const [singleYear, setSingleYear] = React.useState('');

  useEffect(() => {
    console.log("Current city ye ha: ",city)
  }, [city])

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleReset = () => {
    setCity('karachi');

  }

  const handlePreviewChange = () => {
    setShowPreviewModal(!showPreviewModal);
  }

  const togglePreviewModal = () => {
    setShowPreviewModal(!showPreviewModal);
  }

  return (
    <div className='w-full h-[100vh] position-absolute bg-red-600 flex-col mt-20'>

      {
        showPreviewModal && <PreviewModal previewMode={previewMode} setPreviewMode={setPreviewMode} togglePreviewModal={togglePreviewModal} showPreviewModal={showPreviewModal} setShowPreviewModal />
      }

      {/* controls area start  */}
      <div className="flex h-[8%] justify-between bg-blue-500">
        <div className="flex w-[40%]  p-2 align-items-center gap-1">
          <select onChange={handleCityChange} className='w-[60%] bg-emerald-400 border-2 rounded border-black' name="citySelection" id="citySelection" >
            <option value="karachi" >Karachi</option>
            <option value="islamabad" >Islamabad</option>
            <option value="lahore" >Lahore</option>
          </select>
          <h3 className='text-black font-bold text-lg'>City: {city}</h3>
        </div>



        <div className="flex gap-2 pl-12 py-1 w-[30%] bg-blue-500">
          <button onClick={handlePreviewChange} className={`${styles.myBtn}`}>Preview</button>
          <button onClick={handleReset} className={`${styles.myBtn}`}>Reset</button>

        </div>
      </div>
      {/* controls area end  */}

      {/* map area start  */}
      <div className="flex h-[92%] bg-slate-200">
        <Map city={city} setCity={setCity}
          previewMode={previewMode} leftYear={leftYear} setLeftYear={setLeftYear} rightYear={rightYear} setRightYear={setRightYear} singleYear={singleYear} setSingleYear={setSingleYear}
        />
      </div>
      {/* map area end  */}

    </div>
  )
}
