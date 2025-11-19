import { Dialog, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { getCatalog } from './query/getCatalog';
import { Link } from 'react-router-dom';
import { COLOR } from '../../config/ui/colors';

const HeaderModal = ({ open, onClose }) => {
  const { data, isLoading, error } = getCatalog();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          maxWidth: '1200px',
          borderRadius: '12px',
        },
      }}
    >
      <Stack direction="row" p={3} gap={'92px'} textAlign={'center'}>
        {data?.slice(0, 3).map((item) => (
          <Stack key={item.id}>
            <Stack
              direction="row"
              alignItems="center"
              gap="16px"
              borderRadius={'2px'}
              bgcolor={'#f6f6f6'}
              py={'14px'}
              px={'16px'}
              mb={'16px'}
            >
              <Link
                to={`/category/${item.name}`}
                onClick={() => onClose(false)}
                style={{
                  textDecoration: 'none',
                  width: '250px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.img}
                  alt={item.text}
                  style={{ width: '96px', height: '96px' }}
                />

                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0.1em',
                    color: '#333',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            </Stack>
            {item.id === 1 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Планшеты
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Электронные книги
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Аксессуары для планшетов
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
            {item.id === 2 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Ультрабуки
                  </Typography>
                </Typography>
                <Link style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Моноблоки
                  </Typography>
                </Link>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Системные блоки
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
            {item.id === 3 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Тюнинг и детализация
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Диски и шины
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Стартер асх
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" p={3} gap={'92px'} textAlign={'center'}>
        {data?.slice(3, 6).map((item) => (
          <Stack key={item.id}>
            <Stack
              direction="row"
              alignItems="center"
              gap="16px"
              borderRadius={'2px'}
              bgcolor={'#f6f6f6'}
              py={'14px'}
              px={'16px'}
              mb={'16px'}
            >
              <Link
                to={`/category/${item.name}`}
                style={{
                  textDecoration: 'none',
                  width: '250px',
                  textAlign: 'center',
                }}
                onClick={() => onClose(false)}
              >
                <img
                  src={item.img}
                  alt={item.text}
                  style={{ width: '96px', height: '96px' }}
                />

                <Typography
                  fontWeight={'500'}
                  fontSize={'16px'}
                  lineHeight={'150%'}
                  letterSpacing={'0.1em'}
                  color="#333"
                  maxWidth={'128px'}
                  ml={'auto'}
                  mr={'auto'}
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            </Stack>
            {item.id === 4 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Микроволновые печи
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Миксеры и блендеры
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Мультиварки
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
            {item.id === 5 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Беговая дорожка
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Спортивные часы
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Зимние виды спорта
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
            {item.id === 6 ? (
              <Stack>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Игровые ноутбуки
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Геймпад Джойстик
                  </Typography>
                </Typography>
                <Typography style={{ textDecoration: 'none' }}>
                  <Typography
                    fontWeight={'500'}
                    fontSize={'16px'}
                    lineHeight={'150%'}
                    letterSpacing={'0.1em'}
                    sx={{
                      color: COLOR['--m3-sys-light-shadow'],
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Игровой коврик
                  </Typography>
                </Typography>
              </Stack>
            ) : (
              ''
            )}
          </Stack>
        ))}
      </Stack>
    </Dialog>
  );
};

export default HeaderModal;
