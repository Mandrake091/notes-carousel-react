import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  Mousewheel,
  Parallax,
  Keyboard,
} from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Carousel() {
  return (
    <Swiper
    style={{width:'500px', height:'300px'}}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectFade,
        Autoplay,
        Mousewheel,
        Keyboard,
      ]}
      keyboard={{ enabled: true }}
      parallax={true}
      mousewheel={true}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        loop: true,
        autoplay: true,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        delay: 5000,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       
        <img src="https://picsum.photos/500/300" alt="" />
        <button>Vai alla notizia</button>
      </SwiperSlide>
      <SwiperSlide>
     
        <img src="https://picsum.photos/600/300" alt="" />
        <button>go to</button>
      </SwiperSlide>
      <SwiperSlide>
        
        <img src="https://picsum.photos/700/300" alt="" />
        <button>go to</button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/700/400" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel