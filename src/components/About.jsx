import React from 'react';
import ExperienceImg from '../assets/quality.png';
import ClientImg from '../assets/handshake.png';
import ProjectImg from '../assets/folder.png';
import Hero1Img from '../assets/meeting jpg.jpg';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <motion.div className='bg-white pt-16 pb-24'
         initial = {{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration:0.8}}
         viewport={{once:true, amount:0.2}}>
        <h2 className='text-4xl font-bold font-poppins text-button_color text-center pt-7'>The Story So Far</h2>
        
        <div className='flex justify-center mt-12 mb-12'>
        <img src = {Hero1Img} alt = "profile" type = "image/png" className = 'w-80 h-96 rounded-xl transform transition-transform duration-300 hover:scale-105' />
        </div>
        
        <p className='text-center mt-6 px-4 md:px-20 text-xl font-bold font-montserrat text-black'>Hello! I'm Jaya Kumar, a passionate graphic designer, video editor, and social media marketer. I craft visually striking designs, produce engaging video content, and curate effective social media strategies. Constantly evolving, I strive to push the limits of design, art, and innovation to deliver impactful, high-quality work. I am a professional graphic designer specializing in social media, concept-oriented, and product posts. With expertise in Adobe Photoshop, Illustrator, and Premiere Pro, I deliver high-quality, visually impactful designs tailored to client needs.</p>
        
        <div className='grid grid-cols:1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-20'>

            <div className = 'flex flex-col items-center bg-pink-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105'>
                <img src = {ExperienceImg} alt = "Experience" type = "image/png" className = 'w-16 h-16 mb-4'/>
                <h3 className='text-2xl font-semibold font-serif mb-2'>Experience</h3>
                <p className='text-center text-lg font-semibold text-black font-montserrat'>2+ years of experience in graphic design and video editing, creating engaging visuals and impactful content</p>
            </div>

            <div className = 'flex flex-col items-center bg-pink-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105'>
                <img src = {ClientImg} alt = "Client" type = "image/png" className = 'w-16 h-16 mb-4'/>
                <h3 className='text-2xl font-semibold font-serif mb-2'>Clients</h3>
                <p className='text-center text-lg text-black font-semibold font-montserrat'>Over 20+ client projects delivered, transforming ideas into standout designs and content for businesses and personal ventures</p>
            </div>

            <div className = 'flex flex-col items-center bg-pink-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105'>
                <img src = {ProjectImg} alt = "Project" type = "image/png" className = 'w-16 h-16 mb-4'/>
                <h3 className='text-2xl font-semibold font-serif mb-2'>Projects</h3>
                <p className='text-center text-lg text-black font-semibold font-montserrat'>Crafted 100+ standout designs, elevating content with innovative graphic design and video editing</p>
            </div>

        </div>
    </motion.div>
  )
}

export default About