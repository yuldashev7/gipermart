import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

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
        <Typography maxWidth="120px" textAlign="center">
          {text}
        </Typography>
      </Stack>
    </Container>
  );
};

export default GetHome;
