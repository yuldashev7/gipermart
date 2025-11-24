import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      spacing={3}
      sx={{
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" fontWeight="700" color="primary">
        404
      </Typography>

      <Typography
        variant="h5"
        fontWeight="500"
        color="text.secondary"
        maxWidth={'500px'}
      >
        К сожалению, произошла ошибка, Запрошенная Вами страница не найдена!
      </Typography>

      <Box>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '8px',
            px: 3,
            py: 1.2,
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Главная
        </Button>
      </Box>
    </Stack>
  );
};

export default NotFound;
