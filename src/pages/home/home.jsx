import React from 'react';
import GetHome from '../../components/home/getHome';
import { getCatalog } from '../../components/query/getQuey';
import { Grid } from '@mui/material';
import HomeSwiper from '../../components/home/swiper/homeSwiper';

const Home = () => {
  const { data, isLoading } = getCatalog();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Grid container my={4} gap={'21px'}>
      <Grid>
        <HomeSwiper />
      </Grid>
    </Grid>
  );
};

export default Home;
