import React from 'react';
import PhotoShop from '../assets/photoshop.png';
import Illustrator from '../assets/illustrator.png';
import PremierePro from '../assets/premiere-pro.png';
import {motion} from 'framer-motion';

const Tools = () => {
  return (
    <motion.div className='bg-white pb-20'
         initial = {{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration:0.8}}
         viewport={{once:true, amount:0.2}}>
        <h2 className='text-3xl font-semibold font-tomorrow text-center pt-14 text-zinc-900'>The Gear I Work With</h2>
        
        <div className='grid grid-cols:1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-20'>
        
          <div className = 'flex flex-col items-center bg-gray-400 p-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-400 hover:text-white duration-500 text-black'>
            <img src = {PhotoShop} alt = "PhotoShop" type = "image/png" className = 'w-16 h-16 mb-4'/>
            <h3 className='text-xl font-semibold font-quantico mb-2 text-center'>Adobe PhotoShop</h3>
          </div>
        
          <div className = 'flex flex-col items-center bg-gray-400 p-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-400 hover:text-white duration-500 text-black'>
            <img src = {Illustrator} alt = "Illustrator" type = "image/png" className = 'w-16 h-16 mb-4'/>
            <h3 className='text-xl font-semibold font-quantico mb-2 text-center'>Adobe Illustrator</h3>
          </div>
        
          <div className = 'flex flex-col items-center bg-gray-400 p-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-400 hover:text-white duration-500 text-black'>
            <img src = {PremierePro} alt = "PremierePro" type = "image/png" className = 'w-16 h-16 mb-4'/>
            <h3 className='text-xl font-semibold font-quantico mb-2 text-center'>Adobe Premiere Pro</h3>
          </div>
        
        </div>

    </motion.div>
  )
}

export default Tools