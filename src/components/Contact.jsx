import React from 'react'
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <motion.div id = "contacts" className='bg-red-200 pb-10'
         initial = {{opacity: 0, y: 50}}
         whileInView={{opacity: 1, y: 0}}
         transition={{duration:0.8}}
         viewport={{once:true, amount:0.2}}>
        <h1 className='text-center py-14 font-mono font-bold text-3xl'>Drop a Line</h1>
        
        <div className='text-center px-4 md:px-20'>
            <h3 className='font-mono font-bold text-2xl'>Let's talk Business</h3>
            <p className='mt-6 font-mono text-lg'>Have a project in mind or need creative support? Reach out via mail or call—I'm here to bring your ideas to life!</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
                <a href="https://wa.me/message/P6DOHWVPMJGBE1" className='flex items-center justify-center space-x-4 bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <img width="75" height="75" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" className='hover:scale-110 transition-transform duration-300'/>
                    <p className='font-mono text-lg font-bold'>+91 81227 52757</p>
                </a>

                <a href="manojai1994@gmail.com" className='flex items-center justify-center space-x-4 bg-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <img width="75" height="75" src="https://img.icons8.com/fluency/48/mail--v1.png" alt="mail" className='hover:scale-110 transition-transform duration-300'/>
                    <p className='font-mono text-lg font-bold'>manojai1994@gmail.com</p>
                </a>
            </div>
        </div>

        <div className='text-center px-4 md:px-20 mt-16'>
            <h3 className='font-mono font-bold text-2xl'>Explore My World</h3>
            <p className='mt-6 font-mono text-lg'>Get a closer look at my creative journey! Connect with me on social media to explore more of my work and insights</p>
            <div className='flex justify-center items-center mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-8'>
                    <a href="https://www.instagram.com/manojai_jk/" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="85" height="85" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" className='hover:scale-110 transition-transform duration-300'/>
                    </a>

                    <a href="https://www.facebook.com/manojai1994" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="85" height="85" src="https://img.icons8.com/3d-fluency/94/facebook-logo.png" alt="facebook" className='hover:scale-110 transition-transform furation-300'/>
                    </a>

                    <a href="https://x.com/manojai1994?t=n_KuVFPMyOpzh8FmU0IAvw&s=09" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="80" height="80" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx" className='hover:scale-110 transition-transform furation-300'/>
                    </a>

                    <a href="http://www.linkedin.com/in/jaya-kumar-817098114" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="80" height="80" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" className='hover:scale-110 transition-transform furation-300'/>
                    </a>
                    
                    <a href="https://www.behance.net/jayakumar94" className='flex items-center justify-center bg-white w-36 h-36 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <img width="80" height="80" src="https://img.icons8.com/fluency/48/behance.png" alt="behance" className='hover:scale-110 transition-transform furation-300'/>
                    </a>
                </div>
            </div>
        </div>

        <div className='text-center mt-16 px-4'>
            <p className='font-mono font-bold text-lg'>Every great idea deserves outstanding execution. Let's collaborate to craft designs that inspire and deliver impact. Reach out to begin our creative journey!</p>
            <p className='mt-24 font-mono font-bold text-lg'>Copyright © 2025 Jaya Kumar. All Rights Reserved.</p>
        </div>
    </motion.div>
  )
}

export default Contact
