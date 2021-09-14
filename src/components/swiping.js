import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function Swiping () {
  const slides = [];

for (let i = 0; i < 5; i += 1) {
  slides.push(
    <SwiperSlide key={`aslide-${i}`}>
      <img
        src={`https://picsum.photos/id/${i + 1}/500/300`}
        style={{ listStyle: "none" }}
        alt={`Slide ${i}`}
      />
    </SwiperSlide>
  );
}

  

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={3}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        console.log("reach end");
        const tmp = slides.unshift();
        slides.push(tmp);
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
}
