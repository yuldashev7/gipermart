import React from 'react';
import { useGetPhone } from '../../pages/home/query/getPhones';
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneBuyIcon from '../../assets/icons/phone-buy-icon';
import { COLOR } from '../../config/ui/colors';

const Phones = ({
  img,
  title,
  price,
  showOldPrice = true,
  isMargin = false,
  id,
}) => {
  return (
    <Link
      to={`product/${id}`}
      style={{
        textDecoration: 'none',
        marginBottom: isMargin ? 2 : 0,
        marginTop: '14px',
        color: '#333',
      }}
    >
      <Stack>
        <img style={{ maxWidth: '165px' }} src={img} alt="img" />

        <Typography variant="text2">{title}</Typography>
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
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography fontWeight={'600'} fontSize={'18px'}>
            {price} Сум
          </Typography>
          <IconButton
            sx={{
              backgroundColor: COLOR['--gipermart'],
              borderRadius: '0',
              '&:hover': {
                backgroundColor: '#e0d800',
                transform: 'scale(1.05)',
              },
            }}
          >
            <PhoneBuyIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Phones;
