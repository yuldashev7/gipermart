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
    <Box position="relative" mt={'20px'}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.custom-prevBanner',
          nextEl: '.custom-nextBanner',
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
        className="custom-prevBanner"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#dddcdc' },
        }}
      >
        <LeftArrowIcon />
      </IconButton>

      <IconButton
        className="custom-nextBanner"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#dddcdc' },
        }}
      >
        <RightArrowIcon />
      </IconButton>
    </Box>
  );
};

export default BannerSwiper;
