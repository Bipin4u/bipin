import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';
import '../CSS/Swipper.css';

function Swiper_({ awards }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCube]}
      navigation
      pagination={{ clickable: true }}
      effect="cube"
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="mySwiper"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      {awards.map((award, index) => (
        <SwiperSlide key={index}>
          <img src={award.src} alt={award.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiper_;
