import React from 'react';
import Project1 from '../assets/Project images/image1.jpg';
import Project2 from '../assets/Project images/image2.jpg';
import Project3 from '../assets/Project images/image3.jpg';
import Project4 from '../assets/Project images/image4.jpg';
import Project5 from '../assets/Project images/image5.jpg';
import Project6 from '../assets/Project images/image6.jpg';

import Video1 from '../assets/videos/video1.mp4';
import Video2 from '../assets/videos/video2.mp4';
import Video3 from '../assets/videos/video3.mp4';

import { motion } from 'framer-motion';

const Projects = () => {

  const projects = [
    {
      image: Project1,
      title: 'Project 1',
      link: 'https://www.behance.net/gallery/206881773/A4-invitation-for-Boutique'
    },

    {
      image: Project2,
      title: 'Project 2',
      link: 'https://www.behance.net/gallery/203260251/Minimalistic-Social-Media-Post'
    },

    {
      image: Project3,
      title: 'Project 3',
      link: 'https://www.behance.net/gallery/203259827/Carousel-Slide-For-Instagram-Post'
    },

    {
      image: Project4,
      title: 'Project 4',
      link: 'https://www.behance.net/gallery/208081933/School-Social-Media-Banner'
    },

    {
      image: Project5,
      title: 'Project 5',
      link: 'https://www.behance.net/gallery/203484661/Biriyani-Offer-Social-Media-Post'
    },

    {
      image: Project6,
      title: 'Project 6',
      link: 'https://www.behance.net/gallery/192908435/Pappad-Product-Poster'
    },
  ];

  return (
    <motion.div
      id="works"
      className='pb-20 mt-5 bg-white'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* HEADING */}
      <h2 className='text-4xl font-bold font-poppins text-button_color text-center pt-10'>
        Design Chronicles
      </h2>


      {/* IMAGE PROJECTS */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-20'>

        {projects.map((project, index) => (

          <div
            key={index}
            className='relative flex flex-col items-center bg-pink-200 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500'
          >

            <div className='relative overflow-hidden rounded-2xl'>

              <img
                src={project.image}
                alt={project.title}
                className='w-60 h-60 object-cover rounded-2xl transition-transform duration-500 transform hover:scale-105'
              />

              {/* OVERLAY */}
              <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500'>

                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-pink-300 text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-button_color hover:text-white transition-all duration-300'
                >
                  VIEW
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* VIDEO SECTION HEADING */}
      <h3 className='text-3xl font-bold text-center mt-20 text-button_color font-poppins'>
        Video Editing Works
      </h3>


      {/* VIDEO PROJECTS */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 md:px-20'>


        {/* VIDEO 1 */}
        <div className='bg-pink-200 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500'>

          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-72 object-cover rounded-2xl hover:scale-105 transition-transform duration-500'
          >
            <source src={Video1} type='video/mp4' />
          </video>

          <div className='flex justify-center mt-4'>

          </div>

        </div>


        {/* VIDEO 2 */}
        <div className='bg-pink-200 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500'>

          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-72 object-cover rounded-2xl hover:scale-105 transition-transform duration-500'
          >
            <source src={Video2} type='video/mp4' />
          </video>

          <div className='flex justify-center mt-4'>

          </div>

        </div>


        {/* VIDEO 3 */}
        <div className='bg-pink-200 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500'>

          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-72 object-cover rounded-2xl hover:scale-105 transition-transform duration-500'
          >
            <source src={Video3} type='video/mp4' />
          </video>

          <div className='flex justify-center mt-4'>

          </div>

        </div>

      </div>


      {/* VIEW MORE BUTTON */}
      <div className='flex justify-center mt-12'>

        <a
          href="https://drive.google.com/drive/folders/16Y7daxHJot1NoS3flPMAVWpTO1rvhQkc?usp=drive_link"
          target='_blank'
          rel="noopener noreferrer"
          className='bg-button_color text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-300 hover:text-black transition-all duration-300'
        >
          View More Projects
        </a>

      </div>

    </motion.div>
  );
}

export default Projects;