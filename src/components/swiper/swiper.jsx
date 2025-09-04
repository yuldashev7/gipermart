import { Box, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import LeftArrowIcon from '../../assets/icons/left-arrow-icon';
import RightArrowIcon from '../../assets/icons/right-arrow-icon';
import { COLOR } from '../../config/ui/colors';

const BannerSwiper = ({ data }) => {
  return (
    <Box position="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        loop={true}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img style={{ width: '100%' }} src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className="custom-prev"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <LeftArrowIcon />
      </IconButton>

      <IconButton
        className="custom-next"
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <RightArrowIcon />
      </IconButton>
    </Box>
  );
};

export default BannerSwiper;
