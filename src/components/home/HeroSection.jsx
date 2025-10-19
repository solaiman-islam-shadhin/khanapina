import React from 'react'
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
    <div className='relative'>
      <div className='w-full mt-10 rounded-5xl overflow-hidden'>
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
          <SwiperSlide>
            <video autoPlay={true} loop muted src={v1}></video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay={true} loop muted src={v2}></video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay={true} loop muted src={v3}></video>
          </SwiperSlide>
          <SwiperSlide>
            <video autoPlay={true} loop muted src={v4}></video>
          </SwiperSlide>
        </Swiper>

        <div className='left-1/9 absolute top-1/4 z-10'>
          <div className='bg-transparen backdrop-blur-md p-5 shadow-sm rounded-lg shadow-primary w-1/2'>
            <h1 className='text-6xl font-play text-primary space-y-2 text-left place-items-center'>
              Welcome to <span className='font-mina text-8xl'>খানাপিনা</span> 
              <span className='text-4xl text-accent'><br />-Where Every Bite Tells a Story..</span>
            </h1>
            <p className='text-xl font-play text-info text-left mt-5'>
              At KhanaPina, food isn't just a meal—it's a celebration of culture, comfort, and connection. 
              We bring together the bold spices of tradition with the finesse of modern culinary craft to serve 
              dishes that spark joy and nostalgia. Our chefs pour heart and heritage into every plate, ensuring 
              that each bite tells a story worth savoring. With a cozy ambiance and seamless online experience, 
              KhanaPina is your go-to destination for flavor, freshness, and feel-good moments.
            </p>
          </div>
          <div>
            <button className='cursor-pointer mt-5 py-5 bg-transparen backdrop-blur-md p-5 shadow-sm rounded-lg shadow-error hover:bg-primary hover:text-white transition-all duration-200'>
              <Link className='font-play text-lg'>View Our Foods</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}