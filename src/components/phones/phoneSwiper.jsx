import { Box, IconButton, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { useGetPhone } from '../../pages/home/query/getPhones';
import Phones from './phones';
import PhoneArrow from '../../assets/icons/phone-left-arrow';
import PhoneRightArrow from '../../assets/icons/phone-right-arrow';

const PhoneSwiper = () => {
  const { data } = useGetPhone();
  return (
    <Box position="relative" mt={'20px'}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.custom-prevPhone',
          nextEl: '.custom-nextPhone',
        }}
        loop={true}
      >
        {data?.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id}>
            <Stack
              pl={'10px'}
              pr={'16px'}
              pt={'5px'}
              pb={'14px'}
              mb={'20px'}
              mt={'20px'}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Phones {...item} />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        className="custom-prevPhone"
        sx={{
          position: 'absolute',
          top: '-50px',
          right: '70px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'red',
          '&:hover': { backgroundColor: '#ff4d4d' },
        }}
      >
        <PhoneArrow />
      </IconButton>

      <IconButton
        className="custom-nextPhone"
        sx={{
          position: 'absolute',
          top: '-50px',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'red',
          '&:hover': { backgroundColor: '#ff4d4d' },
        }}
      >
        <PhoneRightArrow />
      </IconButton>
    </Box>
  );
};

export default PhoneSwiper;
