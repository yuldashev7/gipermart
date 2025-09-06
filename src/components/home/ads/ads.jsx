import { Stack } from '@mui/material';
import React from 'react';

const Ads = ({ img }) => {
  return (
    <Stack>
      <img src={img} alt="" />
    </Stack>
  );
};

export default Ads;
