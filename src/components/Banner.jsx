import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

import hero1 from '../assets/banner/hero1.jpg';
import hero2 from '../assets/banner/hero2.jpg';
import hero3 from '../assets/banner/hero3.jpg';
import hero4 from '../assets/banner/hero4.jpg';


export default function HeroSlider() {
  const slides = [
     {
    img: hero1,
    title: 'Mega Sale Up to 50% Off',
    subtitle: 'Grab your favorite products before they run out!',
    cta: 'Shop Now',
  },
  {
    img: hero2,
    title: 'New Arrivals for Fall 2025',
    subtitle: 'Discover the latest trends and must-have items.',
    cta: 'Explore',
  },
  {
    img: hero3,
    title: 'Best Sellers Collection',
    subtitle: 'Our most loved products by customers worldwide.',
    cta: 'Buy Now',
  },
  {
    img: hero4,
    title: 'Free Shipping on Orders Over $50',
    subtitle: 'Shop more, save more, and enjoy free delivery.',
    cta: 'Start Shopping',
  },
  ];

  return (
    <div className="w-full overflow-hidden shadow-2xl mt-8">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[60vh] md:h-[80vh]">
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-4 text-white text-lg md:text-2xl font-light max-w-2xl drop-shadow-sm">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition">
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
