import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomeSlider = ({ SliderImages, Slideperview, Swiperref }) => {
  return (
    <>
      <Swiper
        slidesPerView={Slideperview}
        ref={Swiperref}
        style={{ width: "100%" }}
      >
        {SliderImages.map((icon, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={icon}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  // objectFit: "contain",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CustomeSlider;
