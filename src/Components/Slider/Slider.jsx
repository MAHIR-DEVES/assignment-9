// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import slide1 from '../../assets/slide 1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <img src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
