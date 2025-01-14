import React from 'react'
import {motion} from 'framer-motion';
import WhatsappImg from '../assets/Media/whatsapp.png';
import MailImg from '../assets/Media/gmail.png';
import InstagramImg from '../assets/Media/instagram.png';
import TwitterImg from '../assets/Media/twitter.png';
import FacebookImg from '../assets/Media/facebook.png';
import LinkedinImg from '../assets/Media/linkedin.png';
import BehanceImg from '../assets/Media/behance.png';

const Contact = () => {
  return (
    <motion.div id = "contacts" className='bg-button_color pb-5'
         initial = {{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration:0.8}}
         viewport={{once:true, amount:0.2}}>
        <h1 className='text-center py-14 font-poppins text-white font-bold text-4xl'>Drop a Line</h1>
        
        <div className='text-center px-4 md:px-20'>
            <h3 className='font-nunito text-pink-200 font-bold text-2xl'>Let's talk Business</h3>
            <p className='mt-6 font-nunito font-semibold text-white text-xl'>Have a project in mind or need creative support? Reach out via mail or call—I'm here to bring your ideas to life!</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
                <a href="https://wa.me/message/P6DOHWVPMJGBE1" className='flex items-center justify-center space-x-4 bg-pink-200 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <img width="75" height="75" src = {WhatsappImg} alt="whatsapp" className='hover:scale-110 transition-transform duration-300'/>
                    <p className='font-montserrat text-xl font-bold'>+91 81227 52757</p>
                </a>

                <a href="mailto:manojai1994@gmail.com" className='flex items-center justify-center space-x-4 bg-pink-200 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <img width="75" height="75" src = {MailImg} alt="mail" className='hover:scale-110 transition-transform duration-300'/>
                    <p className='font-montserrat text-xl font-bold'>manojai1994@gmail.com</p>
                </a>
            </div>
        </div>

        <div className='text-center px-4 md:px-20 mt-16'>
            <h3 className='font-nunito text-pink-200 font-bold text-2xl'>Explore My World</h3>
            <p className='mt-6 font-nunito font-semibold text-white text-xl'>Get a closer look at my creative journey! Connect with me on social media to explore more of my work and insights</p>
            <div className='flex justify-center items-center mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-8'>
                    <a href="https://www.instagram.com/manojai_jk/" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="80" height="80" src = {InstagramImg} alt="instagram" className='hover:scale-110 transition-transform duration-300'/>
                    </a>

                    <a href="https://www.facebook.com/manojai1994" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="75" height="75" src = {FacebookImg} alt="facebook" className='hover:scale-110 transition-transform furation-300'/>
                    </a>

                    <a href="https://x.com/manojai1994?t=n_KuVFPMyOpzh8FmU0IAvw&s=09" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="75" height="75" src = {TwitterImg} alt="twitterx" className='hover:scale-110 transition-transform furation-300'/>
                    </a>

                    <a href="http://www.linkedin.com/in/jaya-kumar-817098114" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="75" height="75" src = {LinkedinImg} alt="linkedin" className='hover:scale-110 transition-transform furation-300'/>
                    </a>
                    
                    <a href="https://www.behance.net/jayakumar94" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="75" height="75" src = {BehanceImg} alt="behance" className='hover:scale-110 transition-transform furation-300'/>
                    </a>
                </div>
            </div>
        </div>

        <div className='text-center mt-32 px-4'>
            <p className='font-tomorrow text-pink-200 font-bold text-2xl'>Every great idea deserves outstanding execution. Let's collaborate to craft designs that inspire and deliver impact.</p>
            <p className='font-tomorrow text-pink-200 font-bold text-2xl'>Reach out to begin our creative journey!</p>
            <p className='mt-20 font-noto text-background_primary font-bold text-lg'>Copyright © 2025 Jaya Kumar. All Rights Reserved.</p>
        </div>
    </motion.div>
  )
}

export default Contact
