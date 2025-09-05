import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const GetHome = ({ img, text }) => {
  return (
    <Container disableGutters>
      <Stack
        direction={'row'}
        alignItems="center"
        gap="16px"
        borderRadius="8px"
        bgcolor="#f6f6f6"
        p={2}
      >
        <img style={{ maxWidth: '96px' }} src={img} alt="img" />
        <Link style={{ textDecoration: 'none', color: '#333' }}>
          <Typography
            maxWidth="120px"
            textAlign="center"
            sx={{ transition: 'color 0.3s ease', '&:hover': { color: 'red' } }}
          >
            {text}
          </Typography>
        </Link>
      </Stack>
    </Container>
  );
};

export default GetHome;
