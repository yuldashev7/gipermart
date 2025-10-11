import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import headerLogo from '../../assets/svg/header.svg';
import { COLOR } from '../../config/ui/colors';
import TopHeaderTel from '../../assets/icons/topHeaderTel';
import HeaderHamburger from '../../assets/icons/headerHamburger';
import CustomeInput from '../../pages/components/Input';
import SearchIcon from '../../assets/icons/search-icon';
import UserIcon from '../../assets/icons/user-icon';
import HeartIcon from '../../assets/icons/heart-icon';
import BuyIcon from '../../assets/icons/buy-icon';
import { getBanner } from '../data/query/getQuery';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import UserDrawer from '../../components/user-drawer/user-drawer';
import { useDebounce } from '@uidotdev/usehooks';
import { searchParams } from './query/searchParams';
import HeaderModal from '../components/headerModal';

const Header = () => {
  const navigate = useNavigate();
  const shoppingPage = () => {
    navigate('/cart');
  };
  const [modalOpen, setModalOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { data, isLoading } = getBanner();
  const [userOpen, setUserOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const debounceValue = useDebounce(search, 500);
  const {
    data: searchData,
    isLoading: searchLoading,
    error,
  } = searchParams(search);

  const handleOpenDrawer = () => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      setOpenDrawer(true);
    } else {
      shoppingPage();
    }
  };

  return (
    <>
      <Stack
        direction="row"
        gap="32px"
        justifyContent="right"
        mr="60px"
        py="10px"
        bgcolor={COLOR['--m3-sys-light-background']}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Доставка и оплата
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Пункты выдачи
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Поддержка
        </Typography>
        <a
          href="tel:998902537753"
          style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}
        >
          <TopHeaderTel />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: COLOR['--m3-sys-light-on-background'],
            }}
          >
            +998 90 253 77 53
          </Typography>
        </a>
      </Stack>

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: COLOR['--m3-sys-light-background'],
          zIndex: 1100,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" gap="32px" py="16px">
            <Link to={'/'}>
              <img
                style={{ maxWidth: '139px', marginTop: '12px' }}
                src={headerLogo}
                alt="logo"
              />
            </Link>

            <Button onClick={() => setModalOpen(true)}>
              <Stack
                direction="row"
                alignItems="center"
                gap="15px"
                bgcolor={COLOR['--gipermart']}
                maxWidth="158px"
                py="10px"
                pl="12px"
                pr="30px"
                sx={{
                  animation: 'flash 1.4s infinite',
                  '@keyframes flash': {
                    '0%': { backgroundColor: COLOR['--gipermart'] },
                    '50%': { backgroundColor: '#f9ad31' },
                    '100%': { backgroundColor: COLOR['--gipermart'] },
                  },
                }}
              >
                <HeaderHamburger />
                <Typography
                  fontWeight="400"
                  fontSize="20px"
                  sx={{ color: COLOR['--m3-sys-light-on-tertiary-container'] }}
                >
                  Каталог
                </Typography>
              </Stack>
            </Button>
            <HeaderModal open={modalOpen} onClose={() => setModalOpen(false)} />
            <Stack
              direction="row"
              alignItems="center"
              maxWidth={'600px'}
              width={'100%'}
              ml={'32px'}
              position={'relative'}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '16px',
                  maxWidth: '600px',
                  width: '100%',
                  border: `1px solid ${COLOR['--m3-sys-light-outline']}`,
                }}
              >
                <CustomeInput
                  placeholder="Поиск"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setOpenSearch(true);
                  }}
                />
                <SearchIcon />
              </label>
              {search.length > 1 && (
                <Stack
                  style={{
                    position: 'absolute',
                    border: `1px solid ${COLOR['--m3-sys-light-outline']}`,
                    top: '50px',
                    backgroundColor: '#fff',
                    padding: '10px',
                    width: '100%',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                >
                  {openSearch &&
                    searchData?.map((item) => (
                      <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setOpenSearch(false)}
                      >
                        <Typography
                          key={item.id}
                          fontSize="16px"
                          fontWeight="400"
                          sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    ))}
                </Stack>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" gap="32px">
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton onClick={() => setUserOpen(true)}>
                  <UserIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Войти
                </Typography>
              </Stack>
              <UserDrawer open={userOpen} onClose={() => setUserOpen(false)} />
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton>
                  <HeartIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Избранное
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton onClick={handleOpenDrawer}>
                  <BuyIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Корзина
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <UserDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </Container>
      </Box>
    </>
  );
};

export default Header;
