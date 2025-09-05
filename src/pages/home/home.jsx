import React from 'react';
import GetHome from '../../components/home/getHome';
import { getCatalog } from '../../components/query/getQuey';
import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import HomeSwiper from '../../components/home/swiper/homeSwiper';
import { useGetPhone } from './query/getPhones';
import PhoneSwiper from '../../components/phones/phoneSwiper';

const Home = () => {
  const { isLoading } = getCatalog();
  const { data, isLoading: phoneLoading } = useGetPhone();

  if (isLoading)
    return (
      <Stack mt={'40px'} mb={'32px'}>
        <Skeleton height={'50px'} />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Stack>
    );

  return (
    <>
      <Grid container my={4} gap={'21px'}>
        <Grid>
          <HomeSwiper />
        </Grid>
      </Grid>
      <Stack mb={'28px'} mt={'40px'}>
        <Typography
          fontWeight={'600'}
          fontSize={'24px'}
          lineHeight={'150%'}
          color="#333"
          ml={'40px'}
        >
          Смартфоны и планшеты
        </Typography>

        <Grid container mt={'24px'} ml={'40px'}>
          <Grid>
            <PhoneSwiper />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Home;
