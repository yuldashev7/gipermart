import React from 'react';
import { useGetPhone } from '../../pages/home/query/getPhones';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Phones = ({
  img,
  title,
  price,
  showOldPrice = true,
  isMargin = false,
}) => {
  return (
    <Stack>
      <Link>
        <img style={{ maxWidth: '165px' }} src={img} alt="img" />
      </Link>
      <Typography variant="text2" sx={{ mb: isMargin ? 2 : 0, mt: '14px' }}>
        {title}
      </Typography>
      {showOldPrice && (
        <Typography
          fontWeight={'400'}
          fontSize={'14px'}
          color="#999"
          style={{ textDecoration: 'line-through' }}
        >
          74 990 Сум
        </Typography>
      )}
      <Typography fontWeight={'600'} fontSize={'18px'} color="#333">
        {price} Сум
      </Typography>
    </Stack>
  );
};

export default Phones;
