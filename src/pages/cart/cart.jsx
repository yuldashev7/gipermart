import { useSelector } from 'react-redux';
import { Box, Button, Stack, Typography } from '@mui/material';
import Shopping from '../../components/shopping/shopping';
import { Link } from 'react-router-dom';
import { formatter } from '../../config/ui/summation-price';
import { COLOR } from '../../config/ui/colors';
import { toast } from 'react-toastify';
import CartEmpty from '../../assets/icons/cart-empty';

const Cart = () => {
  const { productList, totalPrice } = useSelector((store) => store.product);

  if (!productList.length) {
    return (
      <>
        <Stack
          mt="58px"
          direction="row"
          justifyContent="space-between"
          px="20px"
          mb="20px"
          bgcolor={'#fff'}
          py={'12px'}
        >
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
              Смартфоны и планшеты
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
              Ноутбуки, планшеты и компьютеры
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

        <Stack
          alignItems={'center'}
          textAlign={'center'}
          sx={{
            height: '100%',
            textAlign: 'center',
          }}
        >
          <CartEmpty />
        </Stack>
        <Box textAlign="center" py={5}>
          <Typography variant="h6" color="text.secondary">
            Ваша корзина пока пуста.
          </Typography>
          <Typography
            style={{
              marginBottom: '15px',
              marginTop: '10px',
            }}
          >
            Начните с главной страницы — вы можете найти нужный товар через
            поиск или просмотреть подборки.
          </Typography>

          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              backgroundColor: '#f3f3f3',
              color: '#000',
              paddingTop: '4px',
              paddingBottom: '4px',
              paddingLeft: '6px',
              paddingRight: '6px',
              borderRadius: '4px',
            }}
          >
            Главная страница
          </Link>
        </Box>
      </>
    );
  }

  return (
    <>
      <Stack
        mt="58px"
        direction="row"
        justifyContent="space-between"
        px="20px"
        mb="20px"
        bgcolor="#fff"
        py="12px"
      >
        {[
          'Смартфоны и планшеты',
          'Ноутбуки, планшеты и компьютеры',
          'Техника для дома',
          'Игры и развлечения',
          'Телевизоры, Аудио-видео, Hi-Fi',
          'Фото и видеотехника',
        ].map((text, i) => (
          <Link key={i} style={{ textDecoration: 'none' }}>
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
              {text}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb="24px"
        px="20px"
      >
        <Typography fontWeight="500" fontSize="24px" color="#333">
          Корзина
        </Typography>
        <Stack direction="row">
          <Typography
            mt="20px"
            fontWeight="800"
            fontSize="24px"
            color="#333"
            ml="20px"
            mb="24px"
          >
            TOTAL:
          </Typography>
          <Typography
            fontWeight="500"
            fontSize="24px"
            color="#333"
            ml="20px"
            mb="24px"
            mt="20px"
          >
            {formatter(totalPrice)} Сум
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        {productList.map((item) => (
          <Shopping key={item.id} product={item} />
        ))}
      </Stack>
      <Stack pb="30px" alignItems="center" textAlign={'center'}>
        <Link
          to={productList.length ? '/order' : '#'}
          style={{ width: '100%' }}
        >
          <Button
            onClick={() => {
              if (!productList.length) {
                toast.error('Корзина пуста! Добавьте товар.');
              }
            }}
            disabled={!productList.length}
            sx={{
              backgroundColor: COLOR['--gipermart'],
              borderRadius: 0,
              fontSize: '18px',
              paddingY: '12px',
              marginTop: '20px',
              maxWidth: '230px',
              width: '100%',
              color: '#333',
              '&:hover': {
                backgroundColor: '#e0d800',
              },
            }}
          >
            Заказать
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Cart;
