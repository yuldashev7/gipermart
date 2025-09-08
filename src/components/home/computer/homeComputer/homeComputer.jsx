import { IconButton, Stack, Typography, Box } from '@mui/material';
import { COLOR } from '../../../../config/ui/colors';
import PhoneBuyIcon from '../../../../assets/icons/phone-buy-icon';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../store/product-reducer';
import { toast } from 'react-toastify';

const HomeComputer = ({ title, price, img, brand, display, id }) => {
  const dispatch = useDispatch();

  const addStore = () => {
    const newPrice = Number(price.split(' ').join(''));
    const product = { id, title, price: newPrice, img };
    dispatch(addProduct(product));

    if (newPrice) {
      toast.success("Mahsulot Qo'shildi");
    } else {
      toast.error("Mahsulot Qo'shishda Xatolik");
    }
  };
  return (
    <Stack>
      <Stack
        sx={{
          pb: 2,
          px: '10px',
          width: '230px',
          height: '450px',
          transition: 'all 0.3s ease',
          borderRadius: '16px',
          bgcolor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            transform: 'translateY(-6px)',
          },
        }}
      >
        <Link to={`product/${id}`} style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={img}
              alt={title}
              style={{
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
          </Box>

          <Stack>
            <Typography fontWeight="500" fontSize="18px" color="#222">
              {title}
            </Typography>
            <Typography fontWeight="400" fontSize="16px" color="#666">
              {brand}
            </Typography>
            <Typography fontWeight="400" fontSize="16px" color="#666">
              {display}
            </Typography>
          </Stack>
        </Link>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={'-60px'}
        >
          <Typography
            fontWeight="700"
            fontSize="18px"
            color={COLOR['--m3-sys-light-shadow']}
          >
            {price} Сум
          </Typography>

          <IconButton
            onClick={addStore}
            sx={{
              backgroundColor: COLOR['--gipermart'],
              borderRadius: '0',

              transition: 'all 0.3s ease',
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
    </Stack>
  );
};

export default HomeComputer;
