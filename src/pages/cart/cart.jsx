import { useSelector } from 'react-redux';
import { Button, Stack, Typography } from '@mui/material';
import Shopping from '../../components/shopping/shopping';
import { Link } from 'react-router-dom';
import { formatter } from '../../config/ui/summation-price';
import { COLOR } from '../../config/ui/colors';
import { toast } from 'react-toastify';

const Cart = () => {
  const { productList, totalPrice } = useSelector((store) => store.product);

  if (!productList.length) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        mt="80px"
        minHeight="300px"
        bgcolor="#f9f9f9"
        borderRadius="8px"
      >
        <Typography
          fontWeight="500"
          fontSize="20px"
          color="#666"
          textAlign="center"
        >
          Корзина пуста
        </Typography>
      </Stack>
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
