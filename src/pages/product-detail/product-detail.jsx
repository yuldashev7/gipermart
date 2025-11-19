import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetPhone } from '../home/query/getPhones';
import { toast } from 'react-toastify';
import {
  Container,
  IconButton,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { getComputer } from '../../components/home/computer/query/getComputer';
import { COLOR } from '../../config/ui/colors';
import { addProduct } from '../../store/product-reducer';
import { useDispatch } from 'react-redux';
import { saveState, loadState } from '../../config/data/storage';
import React, { useState } from 'react';
import UserDrawer from '../../components/user-drawer/user-drawer';

const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const addStore = () => {
    if (!product) return;
    const newPrice = Number(product.price.split(' ').join(''));
    const newProduct = {
      id: product.id,
      title: product.title,
      price: newPrice,
      img: product.img,
    };

    const currentCard = loadState('cart') || [];
    saveState('cart', [...currentCard, newProduct]);

    dispatch(addProduct(newProduct));

    if (newPrice) {
      toast.success('Товар добавлен', {
        autoClose: 2000,
      });
    } else {
      toast.error('Ошибка при добавлении товара', {
        autoClose: 2000,
      });
    }
  };

  const { data: phones, isLoading, error } = useGetPhone();
  const { data: computers } = getComputer();
  const { id } = useParams();

  if (error) {
    toast.error('Ошибка при добавлении товара');
  }

  const allProduct = [
    ...(phones?.map((item) => ({ ...item, category: 'phone' })) || []),
    ...(computers?.map((item) => ({ ...item, category: 'computer' })) || []),
  ];
  const product = allProduct.find((item) => String(item.id) === String(id));

  if (!product) {
    return toast.error('Товар не найден');
  }

  const handleOpenDrawer = () => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      setOpenDrawer(true);
    } else {
      addStore(product);
    }
  };

  return (
    <Container disableGutters>
      <Stack
        mt="58px"
        direction="row"
        justifyContent="space-between"
        px="20px"
        mb="20px"
        bgcolor={'#fff'}
        py={'12px'}
      >
        <Link style={{ textDecoration: 'none' }} to={'/category/phones'}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Смартфоны и планшеты
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }} to={'/category/computers'}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Ноутбуки, планшеты и компьютеры
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }} to={'/category/washingM'}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Техника для дома
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Игры и развлечения
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Телевизоры, Аудио-видео, Hi-Fi
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Фото и видеотехника
          </Typography>
        </Link>
      </Stack>

      <Link
        to="/"
        style={{
          marginLeft: '20px',
          textDecoration: 'none',
          fontWeight: '400',
          fontSize: '15px',
          lineHeight: '160%',
          color: '#333',
        }}
      >
        Главная
      </Link>

      <Stack
        mt="24px"
        pl="20px"
        borderBottom="2px solid #ededed"
        pb="16px"
        maxWidth="1230px"
        m="0 auto"
        pt="20px"
      >
        <Stack direction="row" alignItems="center" gap="8px" ml="-20px">
          <Typography
            fontWeight="600"
            fontSize="24px"
            lineHeight="150%"
            color="#333"
          >
            {product.title}
          </Typography>
          {product.rame && (
            <Typography
              fontWeight="600"
              fontSize="24px"
              lineHeight="150%"
              color="#333"
            >
              {product.rame}
            </Typography>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" gap="12px" ml="-20px">
          <span style={{ marginTop: '18px' }}>
            <Rating
              name="half-rating"
              defaultValue={0}
              precision={0.5}
              size="small"
            />
          </span>
          <Typography
            fontWeight="400"
            fontSize="16px"
            color="#76bc21"
            mt="10px"
          >
            (0)
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" mt="24px" mb="32px" justifyContent="space-between">
        <img
          style={
            product.category === 'phone'
              ? { maxWidth: '435px', width: '100%' }
              : {
                  maxHeight: '435px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }
          }
          src={product.img}
          alt={product.title}
        />

        <Stack ml="40px" flex={1}>
          {product.category === 'phone' ? (
            <>
              <Typography
                fontWeight="500"
                fontSize="16px"
                color="#333"
                mb="8px"
                mt="15px"
              >
                Объем памяти
              </Typography>
              <Typography
                fontWeight="400"
                fontSize="16px"
                color="#333"
                mb="24px"
              >
                {product.rame}
              </Typography>

              <Typography
                fontWeight="500"
                fontSize="18px"
                color="#333"
                mb="16px"
              >
                Характеристики
              </Typography>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Цвет:</Typography>
                <Typography color="#333">{product.color}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Экран:</Typography>
                <Typography color="#333">6.2"/2400x1080 Пикс</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Оперативная память:</Typography>
                <Typography color="#333">{product.rame}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Память:</Typography>
                <Typography color="#333">128GB</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Камеры:</Typography>
                <Typography color="#333">64/12/12</Typography>
              </Stack>

              <Stack direction="row" gap="8px">
                <Typography color="#999">Беспроводные интерфейсы:</Typography>
                <Typography color="#333">NFC, Wi-Fi, Bluetooth 5.0</Typography>
              </Stack>
            </>
          ) : (
            <>
              <Typography
                fontWeight="500"
                fontSize="18px"
                color="#333"
                mb="16px"
                mt="15px"
              >
                Характеристики
              </Typography>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Бренд:</Typography>
                <Typography color="#333">{product.brand}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">frequency:</Typography>
                <Typography color="#333">{product.display}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Разрешение:</Typography>
                <Typography color="#333">{product.frequency}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Память:</Typography>
                <Typography color="#333">{product.weight}</Typography>
              </Stack>

              <Stack direction="row" gap="8px" mb="12px">
                <Typography color="#999">Процессор:</Typography>
                <Typography color="#333">{product.security}</Typography>
              </Stack>
            </>
          )}
        </Stack>

        <Stack py={'20px'} alignItems="flex-end" mr={'50px'}>
          <Typography
            fontWeight={'800'}
            fontSize={'30px'}
            lineHeight={'150%'}
            color="#333"
          >
            {product.price} Сум
          </Typography>
          <IconButton
            onClick={handleOpenDrawer}
            style={{
              backgroundColor: COLOR['--gipermart'],
              borderRadius: '0',
              paddingTop: '12px',
              paddingBottom: '12px',
              marginTop: '20px',
              maxWidth: '230px',
              width: '100%',
            }}
          >
            <Stack>
              <Typography
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'100%'}
                style={{ color: COLOR['--m3-sys-light-on-tertiary-container'] }}
              >
                Добавить в корзину
              </Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
      <UserDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </Container>
  );
};

export default ProductDetail;
