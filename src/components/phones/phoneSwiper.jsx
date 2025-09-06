import { Box, Container, IconButton, Stack } from '@mui/material';
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
    <Container>
      <Box position="relative" mt={4}>
        <Swiper
          spaceBetween={16}
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
                sx={{
                  p: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    transform: 'translateY(-4px)',
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
            top: '-40px',
            right: '70px',
            zIndex: 10,
            backgroundColor: 'red',
            color: '#fff',
            '&:hover': { backgroundColor: '#ff4d4d' },
          }}
        >
          <PhoneArrow />
        </IconButton>

        <IconButton
          className="custom-nextPhone"
          sx={{
            position: 'absolute',
            top: '-40px',
            right: '20px',
            zIndex: 10,
            backgroundColor: 'red',
            color: '#fff',
            '&:hover': { backgroundColor: '#ff4d4d' },
          }}
        >
          <PhoneRightArrow />
        </IconButton>
      </Box>
    </Container>
  );
};

export default PhoneSwiper;
