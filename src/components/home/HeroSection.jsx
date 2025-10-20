import React from 'react'
import { motion } from 'framer-motion'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router'
import v1 from '../../assets/v1.mp4'
import v2 from '../../assets/v2.mp4'
import v3 from '../../assets/v3.mp4'
import v4 from '../../assets/v4.mp4'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const HeroSection = () => {
  return (
    <div className='md:relative '>
      <motion.div
        className='w-full overflow-hidden'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            color: 'black',
          }}
          loop={true}
        >
          {[v1, v2, v3, v4].map((video, index) => (
            <SwiperSlide key={index}>
              <motion.video
                autoPlay={true}
                loop
                muted
                src={video}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        className='md:absolute inset-x-2 sm:inset-x-4 top-1/4 z-10 lg:left-1/9 lg:inset-x-auto px-2 md:px-0 mt-2 md:mt-0'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className='bg-transparen backdrop-blur-md p-3 sm:p-4 md:p-6 lg:p-5 shadow-sm rounded-lg shadow-primary w-full  lg:w-1/2'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h1
            className='text-2xl  md:text-4xl lg:text-6xl font-play text-primary space-y-2 text-left place-items-center'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Welcome to <motion.span
              className='font-mina text-3xl  md:text-6xl lg:text-8xl'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
            >
              খানাপিনা
            </motion.span>
            <motion.span
              className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-accent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <br />-Where Every Bite Tells a Story..
            </motion.span>
          </motion.h1>
          <motion.p
            className='text-xs sm:text-sm md:text-lg lg:text-xl font-play text-info text-left mt-2 sm:mt-3 md:mt-4 lg:mt-5 hidden sm:block'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            At KhanaPina, food isn't just a meal—it's a celebration of culture, comfort, and connection.
            We bring together the bold spices of tradition with the finesse of modern culinary craft to serve
            dishes that spark joy and nostalgia.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.button
            className=' cursor-pointer mt-3  md:mt-4 lg:mt-5 py-2 sm:py-3 md:py-4 lg:py-5 bg-transparen backdrop-blur-md p-2 sm:p-3 md:p-4 lg:p-5 shadow-sm rounded-lg shadow-error hover:bg-primary hover:text-white transition-all duration-200'
            whileHover={{ scale: 1, y: -5 }}
        
          >
            <Link className='font-play text-xs sm:text-sm md:text-base lg:text-lg'>View Our Foods</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
    
  )
}