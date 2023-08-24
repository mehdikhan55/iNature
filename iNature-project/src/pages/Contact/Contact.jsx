import React from 'react'
import ContactSec from '../../components/ContactSec/ContactSec'
import {PushpinOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons' 

export default function Contact() {
  return (
    <div className='w-full flex flex-col gap-2 mt-32'>

      <div className=' text-white'>
        <h1 className=' text-4xl text-center font-bold'>Contact Us</h1>
      </div>

      <div className='flex px-40 mt-6 gap-2 align-items-center justify-center'>
        <div className='flex-1 justify-self-start text-white'>
          <h1 className=' text-4xl font-bold '>iNature</h1>
          <br />
          <p><span><PushpinOutlined /> </span>Location: National University of Technology (Nutech), I-12 Islamabad, Pakistan</p>
          <p><span><MailOutlined /> </span>mehdikhanofficial@gmail.com</p>
          <p><span><PhoneOutlined /> </span>+92 313 2297998</p>
        </div>
        <div className='flex-1'>
          <ContactSec />
        </div>
      </div>

    </div>
  )
}
