import {
  Box,
  Checkbox,
  Container,
  IconButton,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import OrderModal from './orderModal';
import { Link } from 'react-router-dom';
import PayMe from '../../assets/icons/payme';
import Click from '../../assets/icons/click';
import { COLOR } from '../../config/ui/colors';
import CustomeInput from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { formatter } from '../../config/ui/summation-price';
import { removeProduct } from '../../store/product-reducer';

const Order = () => {
  const { productList, totalPrice } = useSelector((store) => store.product);
  const [selected, setSelected] = React.useState('pickup');
  const [check, setCheck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <Container>
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
      <Stack direction={'row'}>
        <Stack width={'600px'} style={{ borderRight: '1px solid  #808080' }}>
          <Typography
            fontWeight={'600'}
            fontSize={'34px'}
            color="#333"
            lineHeight={'118%'}
            mb={'56px'}
          >
            Оформление заказа
          </Typography>

          <Typography
            style={{
              color: COLOR['--m3-sys-light-primary'],
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '150%',
              marginBottom: '16px',
            }}
          >
            Уже покупали у нас?
          </Typography>

          <Typography
            fontWeight={'600'}
            fontSize={'28px'}
            lineHeight={'118%'}
            color="#333"
            marginBottom={'16px'}
          >
            Контактные данные
          </Typography>

          <label>
            Контактное лицо (ФИО) *
            <Box maxWidth={'550px'} mt={'5px'} mb={'16px'}>
              <CustomeInput
                withBorder
                sx={{
                  '& input': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  },
                }}
              />
            </Box>
          </label>
          <label>
            Контактный телефон *
            <Box maxWidth={'550px'} mt={'5px'} mb={'16px'}>
              <CustomeInput
                withBorder
                sx={{
                  '& input': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  },
                }}
              />
            </Box>
          </label>
          <Typography
            mt={'24px'}
            mb={'16px'}
            fontWeight={'600'}
            fontSize={'24px'}
            lineHeight={'114%'}
            color="#333"
          >
            Доставка
          </Typography>
          <label>
            Населенный пункт *
            <Box maxWidth={'550px'} mt={'5px'} mb={'16px'}>
              <CustomeInput
                withBorder
                sx={{
                  '& input': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  },
                }}
              />
            </Box>
          </label>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            maxWidth={'550px'}
            mb={'36px'}
          >
            <Stack mt={'24px'} direction={'row'} alignItems="center">
              <Radio
                checked={selected === 'pickup'}
                onChange={() => setSelected('pickup')}
                sx={{ borderRadius: '20px' }}
              />
              <Box>
                <Typography
                  fontWeight={500}
                  fontSize={20}
                  lineHeight="120%"
                  color="#333"
                >
                  Самовывоз
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight="143%"
                  color="#747474"
                >
                  На пункте выдачи
                </Typography>
              </Box>
            </Stack>

            <Typography
              fontWeight={400}
              fontSize={14}
              lineHeight="160%"
              color="#333"
              mt={'15px'}
            >
              + 0 Сум
            </Typography>
          </Stack>

          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            maxWidth={'550px'}
            mb={'36px'}
          >
            <Stack mt={'24px'} direction={'row'} alignItems="center">
              <Radio
                checked={selected === 'curier'}
                onChange={() => setSelected('curier')}
                sx={{ borderRadius: '20px' }}
              />
              <Box>
                <Typography
                  fontWeight={500}
                  fontSize={20}
                  lineHeight="120%"
                  color="#333"
                >
                  Курьером
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight="143%"
                  color="#747474"
                >
                  Доставка курьером
                </Typography>
              </Box>
            </Stack>

            <Typography
              fontWeight={400}
              fontSize={14}
              lineHeight="160%"
              color="#333"
              mt={'15px'}
            >
              + 300 Сум
            </Typography>
          </Stack>
          <label>
            Комментарии к заказу
            <Box maxWidth={'550px'} mt={'5px'} mb={'16px'}>
              <CustomeInput
                withBorder
                rows={5}
                multiline
                sx={{
                  '& textarea': {
                    resize: 'vertical',
                  },
                }}
              />
            </Box>
          </label>
          <Typography
            fontWeight={'600'}
            fontSize={'28px'}
            lineHeight={'114px'}
            color="#333"
          >
            Покупатель
          </Typography>
          <label>
            Email
            <Box maxWidth={'550px'} mt={'5px'} mb={'16px'}>
              <CustomeInput
                withBorder
                sx={{
                  '& input': {
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  },
                }}
              />
            </Box>
          </label>
          <Stack direction={'row'} mt={'16px'} mb={'24px'}>
            <Checkbox
              sx={{
                color: 'red',
                '&.Mui-checked': {
                  color: 'red',
                },
              }}
            />
            <Box>
              <Typography
                fontWeight={'400'}
                fontSize={'20px'}
                lineHeight={'120%'}
                color="#333"
              >
                Стать постоянным покупателем
              </Typography>
              <Typography
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'125%'}
                color=" #747474"
              >
                Вы сможете видеть историю заказов, проще делать новые и получать
                скидки
              </Typography>
            </Box>
          </Stack>
          <Typography
            fontWeight={'600'}
            fontSize={'28px'}
            lineHeight={'100%'}
            color="#333"
            mb={'16px'}
          >
            Способ оплаты
          </Typography>
          <Stack
            direction={'row'}
            bgcolor={' #f5f5f6'}
            maxWidth={'260px'}
            py={'8px'}
            px={'16px'}
            mb={'16px'}
          >
            <Radio checked={check} onClick={() => setCheck(!check)} />
            <Stack>
              <Typography
                fontWeight={'400'}
                fontSize={'20px'}
                lineHeight={'120%'}
                color="#333"
                mb={'6px'}
              >
                Наличными курьеру
              </Typography>
              <Typography
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'125%'}
                color="#747474"
              >
                Наличными курьеру
              </Typography>
            </Stack>
          </Stack>
          <Stack mb={'36px'} direction={'row'} gap={'17px'}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'5px'}
              bgcolor={' #f5f5f6'}
              maxWidth={'136px'}
              pr={'20px'}
              pl={'5px'}
              py={'4px'}
            >
              <Radio
                checked={selected === 'payme'}
                onClick={() => setSelected('payme')}
              />
              <PayMe />
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'5px'}
              bgcolor={' #f5f5f6'}
              maxWidth={'136px'}
              pr={'20px'}
              pl={'5px'}
              py={'4px'}
            >
              <Radio
                checked={selected === 'click'}
                onClick={() => setSelected('click')}
              />
              <Click />
            </Stack>
          </Stack>
          <IconButton
            onClick={() => setOpen(true)}
            style={{
              backgroundColor: COLOR['--gipermart'],
              maxWidth: '500px',
              borderRadius: '0',
              marginBottom: '62px',
            }}
          >
            <Typography
              style={{
                color: COLOR['--m3-sys-light-on-tertiary-container'],
                fontWeight: '500',
                fontSize: '16px',
              }}
            >
              Подтвердить заказ
            </Typography>
          </IconButton>
          <OrderModal open={open} onClose={() => setOpen(false)} />
        </Stack>
        <Stack ml={'20px'}>
          {productList.length ? (
            <Stack>
              {productList.map((item) => (
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  mb={'18px'}
                >
                  <img width={'80px'} src={item.img} alt="img" />
                  <Stack mt={'5px'}>
                    <Typography
                      mr={'50px'}
                      fontWeight={'400'}
                      fontSize={'16px'}
                      lineHeight={'150%'}
                      color="#333"
                      maxWidth={'200px'}
                      ml={'10px'}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography
                    fontWeight={'600'}
                    fontSize={'20px'}
                    lineHeight={'154%'}
                    color="#333"
                  >
                    {formatter(item.price)} Сум
                  </Typography>
                  <IconButton
                    onClick={() => deleteProduct(item.id)}
                    style={{ height: '24px', marginLeft: '20px' }}
                  >
                    <Typography fontWeight={'600'} color="red">
                      X
                    </Typography>
                  </IconButton>
                </Stack>
              ))}

              <Stack
                direction="row"
                justifyContent="flex-end"
                mt="20px"
                mb="30px"
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  maxWidth={'600px'}
                  width={'100%'}
                  style={{ borderTop: '2px solid #ccc' }}
                >
                  <Typography
                    fontWeight="400"
                    fontSize="20px"
                    lineHeight={'154%'}
                    color="#333"
                    mt={'16px'}
                  >
                    Итого:
                  </Typography>

                  <Typography
                    fontWeight="600"
                    fontSize="24px"
                    lineHeight={'117%'}
                    color="3333"
                  >
                    {formatter(totalPrice)} Сум
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Typography
              textAlign="center"
              mt="50px"
              fontSize="20px"
              color="#666"
            >
              Корзина пуста
            </Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Order;
