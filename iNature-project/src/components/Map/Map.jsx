import React from 'react'
import CompareMap from '../CompareMap/CompareMap';
import SingleMap from '../SingleMap/SingleMap';

export default function Map({city, previewMode, leftYear, rightYear, setLeftYear, setRightYear, singleYear, setSingleYear}) {
    

    return (
        <div className='w-full relative h-[100%] bg-gray-400'>
        
            {previewMode === 'single' ?
                <SingleMap city={city}
                singleYear={singleYear} setSingleYear={setSingleYear}
            /> 
            :
            <CompareMap city={city}
                leftYear={leftYear} rightYear={rightYear} setLeftYear={setLeftYear} setRightYear={setRightYear}
            />}
 

        </div>
    )
}
