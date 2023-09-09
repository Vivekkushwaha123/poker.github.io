import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SecondSection.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="carousel flex flex-col justify-center items-center h-[70vh] w-[100%] object-cover object-bottom mt-4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation={true}
        className="mySwiper w-[70%] rounded-xl"
      >
        <SwiperSlide>
          <img src="./assets/slide-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/slide-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/slide-1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
