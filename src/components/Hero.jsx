import React, {useState, useEffect} from 'react';
import HeroImg from '../assets/manoj-preview.png';
import Resume from '../assets/Resume/JKDigitalResumepresent.pdf';
import {motion} from 'framer-motion';

const Hero = () => {

    const roles = [
        "Graphic Designer",
        "Video Editor",
        "Social Media Marketer"
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [roles.length]);

  return (
    <>
    <motion.div className='w-full py-14 bg-lighttheme_textsecondary mt-32'
                initial = {{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration:0.8}}
                viewport={{once:true, amount:0.2}}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
            
            <div className='flex justify-center items-center'>
                <img src = {HeroImg} alt = "Hero" className='w-full max-w-xs md:max-w-sm lg:max-w-md'/>
            </div>

            <div className='flex flex-col justify-center text-center md:text-left'>
                <h1 className ='font-serif font-semibold text-3xl md:text-4xl text-primary'>Welcome to my Creative Space</h1>
                <p className = "py-4 font-semibold font-tomorrow text-5xl md:text-6xl lg:text-7xl text-secondary">I'm Jaya Kumar</p>
                <p className = 'pt-4 font-medium font-tomorrow text-3xl md:text-4xl text-primary'>I'm a <span className = 'text-textsecondary'>{roles[currentRole]}</span></p>
                <div className='mt-6 flex justify-center md:justify-start'>
                <a href={Resume} 
                   rel = 'noopener noreferrer'
                   target = '_blank'
                   className='inline-block px-4 py-2 text-base font-semibold text-white bg-primary rounded-full shadow-md hover:bg-secondary hover:shadow-lg shadow-black hover:scale-105 active:scale-95 transition-all duration-500'>
                    View Resume
                </a>
                </div>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Hero