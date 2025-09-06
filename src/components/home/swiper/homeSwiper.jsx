import { Box, Container, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import GetHome from '../getHome';
import { getCatalog } from '../../query/getQuey';
import LeftShotArrow from '../../../assets/icons/left-shot-arrow';
import RightShotArrow from '../../../assets/icons/right-shot-arrow';

const HomeSwiper = () => {
  const { data } = getCatalog();
  return (
    <Box position="relative" mt={'20px'}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.custom-prevHome',
          nextEl: '.custom-nextHome',
        }}
        loop={true}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <GetHome {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className="custom-prevHome"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          border: '2px solid gray',
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#dddcdc' },
        }}
      >
        <LeftShotArrow />
      </IconButton>

      <IconButton
        className="custom-nextHome"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          border: '2px solid gray',
          backgroundColor: '#fff',
          '&:hover': { backgroundColor: '#dddcdc' },
        }}
      >
        <RightShotArrow />
      </IconButton>
    </Box>
  );
};

export default HomeSwiper;
