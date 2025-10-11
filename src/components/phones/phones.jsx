import { IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneBuyIcon from '../../assets/icons/phone-buy-icon';
import { COLOR } from '../../config/ui/colors';
import { addProduct } from '../../store/product-reducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import UserDrawer from '../user-drawer/user-drawer';

const Phones = ({
  img,
  title,
  price,
  showOldPrice = true,
  isMargin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const addStore = () => {
    const newPrice = Number(price.split(' ').join(''));
    const product = { id, title, price: newPrice, img };
    dispatch(addProduct(product));

    if (newPrice) {
      toast.success('Товар добавлен');
    } else {
      toast.error('Ошибка при добавлении товара');
    }
  };

  const handleOpenDrawer = () => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      setDrawerOpen(true);
    } else {
      addStore();
    }
  };

  return (
    <Stack>
      <Link
        to={`product/${id}`}
        style={{
          textDecoration: 'none',
          marginBottom: isMargin ? 2 : 0,
          marginTop: '14px',
          color: '#333',
        }}
      >
        <img style={{ maxWidth: '165px' }} src={img} alt="img" />
        <Typography variant="text2">{title}</Typography>
      </Link>

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
          onClick={handleOpenDrawer}
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
      <UserDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Stack>
  );
};

export default Phones;
