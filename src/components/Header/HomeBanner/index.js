import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <>
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://owen.cdn.vccloud.vn/media/codazon/slideshow/a/r/artboard_4_2x-100.jpg"
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://owen.cdn.vccloud.vn/media/codazon/slideshow/_/1/_180525_3_.jpg"
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://owen.cdn.vccloud.vn/media/codazon/slideshow/1/1/1136x532_2x-100_180425.jpg"
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://owen.cdn.vccloud.vn/media/codazon/slideshow/1/3/1366x532_280325.jpg"
              className="w-100"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
export default HomeBanner;
