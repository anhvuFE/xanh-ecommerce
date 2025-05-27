import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import slider1 from "../../assets/images/slider3.webp";
import slider2 from "../../assets/images/slider4.webp";
import slider5 from "../../assets/images/slider5.jpg";
import slider6 from "../../assets/images/slider6.webp";
const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img src={slider1} className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slider2} className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slider5} className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src={slider6} className="w-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HomeBanner;
