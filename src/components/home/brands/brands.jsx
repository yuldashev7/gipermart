import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Brands = ({ img }) => {
  return (
    <Stack
      component={Link}
      to={'/not-found'}
      bgcolor={'#f8f8f8'}
      height={'100px'}
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      sx={{
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: '#e6e6e6',
          '& img': {
            transform: 'scale(1.5)',
          },
        },
      }}
    >
      <img
        style={{
          maxWidth: '80px',
          maxHeight: '60px',
          objectFit: 'contain',
          transition: 'transform 0.3s ease',
        }}
        src={img}
        alt="brand"
      />
    </Stack>
  );
};

export default Brands;
