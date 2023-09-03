import React from 'react'
import styles from './Home.module.css'
import { lightMap } from '../../assets'
import { Link } from 'react-router-dom'
import { services } from '../../constants'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Footer from '../../components/Footer/Footer.jsx'
import { ourStyles } from '../../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import { Tilt } from 'react-tilt'


export default function Home({ active, setActive }) {
  React.useEffect(() => {
    setActive("Home");
  }, [])

  return (
    <>
      <section className={` w-full h-[500px] border border-emerald-400`}>

        <div className={`${styles.main} w-full h-full flex`}>

          <div className={`${styles.textShadow} ${styles.mainSection}  w-1/2 h-full flex flex-col justify-center items-start pt-16 pl-32 ${styles.mainHeading} text-emerald-400 `}>
            <h1 className={`text-6xl font-bold `}>Welcome to<br /><span className={`text-emerald-400`}>Forest</span> Monitoring Application</h1>
            <p className={`text-2xl mt-5 font-extrabold text-shadow-white`}>Find your location and explore the world</p>
          </div>
          <div className={`w-1/2 ${styles.mainSection} relative`}>


          </div>


        </div>

      </section>
      {/* services section start ---> */}

      <section id='serv' className={`w-full h-[700px] border-2 border-emerald-400`}>

        <div className={`w-[full] h-[10%] bg-neutral-950 flex justify-center items-center border-b border-emerald-400`}>
          <h2 className={`text-3xl font-bold  text-emerald-400`}>
            <span>|| </span>
            OUR SERVICES!
            <span> ||</span>
          </h2>
          {/* <h2 className='font-bold text-3xl  text-emerald-400'>
            <span>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| </span>
            OUR SERVICES!
            <span> ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          </h2> */}
        </div>

        <div className={`${styles.serviceSec} h-[90%] flex flex-wrap gap-6 items-center justify-center`}>

          <div className='h-[90%] flex flex-wrap gap-x-20 items-center justify-center'>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className=' h-[10%] mt-[-40px] flex flex-col'>

            <Tilt >
              <motion.div variants={fadeIn('right', 'spring', 0.5, 0.75)} className='w-full'>
                
                  <Link
                    to='/monitoring' className={`${styles.buttonServ} w-full p-2 px-5  text-xl font-bold `} >Let's Monitor</Link>
               
              </motion.div>
            </Tilt>
          </div>

        </div>

      </section>
      {/* services section end ---> */}

      {/* about banner start ---> */}
      <section className={`w-full h-[450px] border-2 border-yellow-300 `}>

        <div className={`w-[full] h-[15%] bg-neutral-950 flex justify-center items-center border-b border-yellow-300`}>
          <h2 className='font-bold text-3xl  text-yellow-300'>
            <span>||
            </span>
            ABOUT THE PROJECT
            <span>||</span>
          </h2>
        </div>

        <div className={`${styles.aboutBanner} flex gap-4 w-full h-[85%] items-center justify-around px-10 py-5`}>

          <div className={`${styles.aboutBox} border border-yellow-400 h-[300px] flex-1 pl-5`}>
            <h2 className='text-4xl font-bold text-emerald-300'>Forest Monitoring System</h2>
            <br />
            <p className={`${styles.textShadowBlack} text-xl text-emerald-400 `}>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet temporibus iste odio animi consequatur sequi consequuntur mollitia vel. ipsum dolor sit amet consectetur adipisicing elit. , voluptatum. <br /><br /></p>
            <button className={`${styles.button}`}>
              <Link to='/about' className={` text-lg font-bold `}>Read More</Link>
            </button>
          </div>

          <div className='bg--500 h-[300px] flex-1'>
            SVG HERE
          </div>

        </div>

      </section>
      {/* footer start ---> */}
      <section className={`w-full h-fit  bg-black border-2 border-white`}>
        <Footer />
      </section>



    </>
  )
}
