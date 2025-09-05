import { Box, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import GetHome from '../getHome';
import { getCatalog } from '../../query/getQuey';

const HomeSwiper = () => {
  const { isLoading, data } = getCatalog();
  return (
    <Box position="relative" mt={'20px'}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        loop={true}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <GetHome {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <IconButton
        className="custom-prev"
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
        className="custom-next"
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
      </IconButton> */}
    </Box>
  );
};

export default HomeSwiper;
