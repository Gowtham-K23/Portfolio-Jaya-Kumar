import React from 'react';
import {motion} from 'framer-motion';
import SocialMedia from '../assets/Service images/social-media.png';
import A4 from '../assets/Service images/poster.png';
import Pamphlet from '../assets/Service images/catalogue.png';
import Industry from '../assets/Service images/prototype.png';
import FlexImg from '../assets/Service images/banner.png';
import Logo from '../assets/Service images/logo.png';
import Card from '../assets/Service images/visiting-card.png';
import Invitation from '../assets/Service images/invitation.png';

const Services = () => {
  return (
    <motion.div id = "services" className='pb-20 bg-slate-200'
         initial = {{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration:0.8}}
         viewport={{once:true, amount:0.2}}>
        <h2 className='text-3xl font-semibold font-tomorrow text-center pt-14'>Your Vision, My Work</h2>

        <div className='grid grid-cols:1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 px-4 md:px-20'>
        
                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {SocialMedia} alt = "Social Media Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Social Media Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Boost your brand with scroll-stopping visuals</p>
                    </div>
        
                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {A4} alt = "A4 Poster Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>A4 Poster Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Bold posters that command attention</p>
                    </div>
        
                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {Pamphlet} alt = "Pamphlet Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Pamphlet Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Compact designs, big impressions</p>
                    </div>

                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {Industry} alt = "Industry Arch Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Textile Industry Arch Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Creative arches tailored for textile excellence</p>
                    </div>

                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {FlexImg} alt = "Flex Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Flex Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Dynamic flex designs for impactful displays</p>
                    </div>

                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {Logo} alt = "Logo Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Season Logo Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Logos that celebrate the spirit of the season</p>
                    </div>

                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {Card} alt = "Visiting Card Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Visiting Card Design</h3>
                        <p className='text-center text-lg text-white font-bold font-spectral'>Leave a mark with standout business cards</p>
                    </div>

                    <div className = 'relative flex flex-col items-center bg-gradient-to-br from-white to-primary p-6 rounded-t-3xl rounded-b-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300'>
                        <img src = {Invitation} alt = "Invitation Design" type = "image/png" className = 'w-16 h-16 mb-4'/>
                        <h3 className='text-2xl font-semibold font-quantico mb-2 text-center'>Invitation Design</h3>
                        <p className='text-center text-lg text-white font-spectral font-bold'>Invitations as unique as your special moments</p>
                    </div>
        
                </div>
    </motion.div>
  )
}

export default Services